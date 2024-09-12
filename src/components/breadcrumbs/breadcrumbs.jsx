import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import members from '../../db/api.members';

const Breadcrumbs = () => {
  const location = useLocation();

  const breadCrumbsItems = [
    { to: '/', label: 'Home' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/contacts', label: 'Contacts' },
    { to: '/about', label: 'About' },
    { to: '/:memberId', label: 'Member' },
  ];

  const membersCrumbs = members.map((member) => {
    return { to: `/${member._id}`, label: `${member.firstName}` };
  });

  const allBreadCrumbs = [...breadCrumbsItems, ...membersCrumbs];

  const breadCrumbsData = (location) => {
    if (location !== '/' && location !== '/404') {
      return location.split('/').map((crumb) => '/' + crumb);
    }
    return [];
  };

  const locationArray = breadCrumbsData(location.pathname);

  const totalLocation = (arrayPathString, dataPath) => {
    const data = [];
    dataPath.forEach((path) => {
      arrayPathString.forEach((item) => {
        if (item === path.to) {
          data.push(path);
        }
      });
    });
    return data;
  };

  const resultData = totalLocation(locationArray, allBreadCrumbs);
  const lastDataItem = resultData.pop();

  return (
    <div className="container pt-3 pb-0 text-center breadcrumb-style">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {resultData.map(({ to, label }) => (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{label}</Link>
            </li>
          ))}
          <li className="breadcrumb-item" aria-current="page">
            {lastDataItem.label}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
