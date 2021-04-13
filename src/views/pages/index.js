import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const coins = ["BUSD", "USDT", "USDC", "BTCB", "BNB", "ETH", "DAI", "SXP", "DOT", "BETH", "LINK", "XVS", "ADA", "LTC", "XRP", "FIL", "BCH"];
const isCoin = (value) => {
  try {
    return coins.includes(value);
  } catch {
    return false
  }
}

const isInteger = (value) => {
  return /^\d+$/.test(value);
}

const Dashboard = React.lazy(() =>
  import('./dashboard')
);

const Venus = React.lazy(() =>
  import('./venus')
);

const Vote = React.lazy(() =>
  import('./vote')
);

const Overview = React.lazy(() =>
  import('./vote/overview')
);

const Details = React.lazy(() =>
  import('./vote/details')
);

const Leaderboard = React.lazy(() =>
  import('./vote/leaderboard')
);

const Market = React.lazy(() =>
  import('./market')
);

const Coin = React.lazy(() =>
  import('./market/coin')
);

const Vault = React.lazy(() =>
  import('./vault')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
            <Route 
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route 
              path={`${match.url}/venus`}
              render={(props) => <Venus {...props} />}
            />
            <Route 
              exacts
              strict
              path={`${match.url}/markets`}
              render={(props) => <Market {...props} />}
            />
            <Route
              exacts
              strict
              path={`${match.url}/market/:coinType`}
              render={({ match }) => {
                if (isCoin(match.params.coinType)) {
                  return (
                    <Coin coinType={match.params.coinType} />
                  )
                } else {
                  return <Redirect to="/error" />
                }
              }}
            />
            <Route 
              exacts
              strict
              path={`${match.url}/votes`}
              render={(props) => <Vote {...props} />}
            />
            <Route 
              exacts
              strict
              path={`${match.url}/vote/leaderboard`}
              render={(props) => <Leaderboard {...props} />}
            />
            <Route
              exacts
              strict
              path={`${match.url}/vote/proposal/:proposalId`}
              render={({ match }) => {
                if (isInteger(match.params.proposalId)) {
                  return (
                    <Overview proposalId={match.params.proposalId} />
                  )
                } else {
                  return <Redirect to="/error" />
                }
              }}
            />
            <Route
              exacts
              strict
              path={`${match.url}/vote/address/:address`}
              render={({ match }) => {
                if (match.params.address) {
                  return (
                    <Details address={match.params.address} />
                  )
                } else {
                  return <Redirect to="/error" />
                }
              }}
            />
            <Route 
              exacts
              strict
              path={`${match.url}/vault`}
              render={(props) => <Vault {...props} />}
            />
            <Route 
              exacts
              strict
              path={`/error`}
              render={(props) => <Dashboard {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
