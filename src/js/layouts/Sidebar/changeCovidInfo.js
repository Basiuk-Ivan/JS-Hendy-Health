import { find } from '../../tools/index.js';
import { getCovidData } from './getCovidData';
import iconWorld from '../../../assets/images/covid/global2.svg';
import iconUa from '../../../assets/images/covid/ukraine2.svg';

const renderInfo = (elements, covidInfo, icon, title) => {
  const [newConfirmed, allConfirmed, deaths] = covidInfo;
  const {
    covidNewRecovered,
    covidInfected,
    covidDeaths,
    covidIconImg,
    covidIconTitle,
  } = elements;

  covidNewRecovered.textContent = `Today infected - ${newConfirmed.toLocaleString()}`;
  covidInfected.textContent = `All infected - ${allConfirmed.toLocaleString()}`;
  covidDeaths.textContent = `All deaths - ${deaths.toLocaleString()}`;
  covidIconImg.src = icon;
  covidIconTitle.textContent = title;
};

export const changeCovidInfo = async () => {
  const { todayCases, todayDeaths, todayRecovered, cases, deaths, recovered } =
    await getCovidData();
  const todayCovid = [todayCases, todayDeaths, todayRecovered];
  const allCovid = [cases, deaths, recovered];

  const button = find('.covid-button');

  const elements = {
    covidNewRecovered: find('.covid-new-recoverdet'),
    covidInfected: find('.covid-infected'),
    covidDeaths: find('.covid-deaths'),
    covidIconImg: find('.covid-icon-img'),
    covidIconTitle: find('.covid-icon-title'),
  };

  renderInfo(elements, todayCovid, iconUa, 'Today');

  button.addEventListener('click', e => {
    const isWorld = e.target.textContent === 'Show All';
    if (isWorld) {
      button.textContent = 'Show Today';
      renderInfo(elements, allCovid, iconWorld, 'All');
    } else {
      button.textContent = 'Show All';
      renderInfo(elements, todayCovid, iconUa, 'Today');
    }
  });
};
