import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styles from '../LinkTabSelector.module.scss';
import LinkTabSelector from 'components/basic/LinkTabSelector/LinkTabSelector';
import CustomNavLink from 'components/basic/CustomNavLink/CustomNavLink';
import { formatURL } from 'lib/utils';

interface Props extends RouteComponentProps {
  className?: string;
}

const LogsLinkTabSelector = (props: Props) => {
  const currentPathArr = formatURL(props.location.pathname).split('/');
  currentPathArr.length = currentPathArr.length - 2;
  const currentPath = currentPathArr.join('/');

  return (
    <LinkTabSelector className={props.className && props.className}>
      <CustomNavLink to={`${currentPath}/logs/containers`} activeClassName={styles['selected']}>
        Containers
      </CustomNavLink>
    </LinkTabSelector>
  );
};

export default withRouter(LogsLinkTabSelector);
