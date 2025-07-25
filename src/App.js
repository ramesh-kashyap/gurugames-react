import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Dashboard from './pages/home/Dashboard';
import Logout from './pages/account/Logout'; // Import the Logout component
import Activity from './pages/activity/Activity';
import Promotion from './pages/promotion/Promotion';
import PromotionShare from './pages/promotion/PromotionShare';
import TeamPartner from './pages/promotion/TeamPartner';
import TeamReport from './pages/promotion/TeamReport';
import Commission from './pages/promotion/Commission';
import Promotionrule from './pages/promotion/PromotionRule';
import Wallet from './pages/wallet/Wallet';
import Wingo from  './pages/bet/wingo/Wingo';
import K3 from './pages/bet/k3/K3';
import K33 from './pages/bet/k3/K33';
import K35 from './pages/bet/k3/K35';
import K310 from './pages/bet/k3/K310';

import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import Account from './pages/account/Account';
import Withdraw from'./pages/wallet/Withdraw';
import WithdrawHistory from'./pages/wallet/WithdrawHistory';
import Paymentpage from './pages/wallet/PaymentPage';
import Rule from'./pages/activity/Rule';
import InvitationBonu from './pages/activity/InvitationBonu';
import Laundry from './pages/activity/Laundry';
import SuperJackpot from './pages/activity/SuperJackpot';
import RedeemGift from './pages/activity/RedeemGift';
import DailySignI from './pages/activity/DailySignI';
import Rules from './pages/activity/Rules';
import Record from './pages/activity/Record';
import Records from './pages/activity/Records';
import Superjackpot_rule from './pages/activity/Superjackpot_rule';
import SuperJackpot_star from './pages/activity/SuperJackpot_star';
import DailyTasks from './pages/activity/DailyTasks';
import LaundryRecord from './pages/activity/LaundryRecord';
import ActivityDetail from './pages/activity/ActivityDetail';
import FirstRecharge from './pages/activity/FirstRecharge';
import RebateRatio from './pages/promotion/RebateRatio';
import Server from './pages/promotion/Server';
import BetRecords from './pages/account/BetRecords';
import ConfirmDeposit from './pages/wallet/ConfirmDeposit';
import D5 from  './pages/bet/5d/D5';
import D53 from  './pages/bet/5d/D53';
import D55 from  './pages/bet/5d/D55';
import D510 from  './pages/bet/5d/D510';
import Subordinate from './pages/promotion/Subordinate';
import Vip from './pages/account/Vip';
import Notification from './pages/account/Notification';
import Guide from './pages/account/Guide';
import Abouts from './pages/account/Abouts';
import AboutDetail from './pages/account/AboutDetail';
import RiskDetail from './pages/account/RiskDetail';
import Message from './pages/account/Message';
import AddBank from './pages/wallet/AddBank';




// import Notification from './pages/account/Notification';




import AddUSDT from './pages/wallet/AddUSDT';
import TransAction from './pages/wallet/TransAction';
import DepositHistory from './pages/wallet/DepositHistory';
import UpiDeposit from './pages/wallet/Upideposit';
import CryptoDeposit from './pages/wallet/CryptoDeposit';



import Receive from './pages/activity/Receive';
import Wingo3 from  './pages/bet/wingo/Wingo3';
import Wingo5 from  './pages/bet/wingo/Wingo5';
import Wingo10 from  './pages/bet/wingo/Wingo10';
import AllLotteryGames from  './pages/bet/k3/AllLotteryGames';





import Deposit from './pages/wallet/Deposit';
import SettingCenters from './pages/account/SettingCenters';
import LoginPassword from './pages/account/LoginPassword';
import BindEmail from './pages/account/BindEmail';
import Feedback from './pages/account/Feedback';
import CustomerService from './pages/account/CustomerService';
import GameStats from './pages/account/GameStats';
import StreakBonus from './pages/account/StreakBonus';
import Avatar from './pages/account/Avatar';
import Turnover from './pages/account/Turnover';









function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route
          path="/index"
          element={
              <Dashboard />
          }
        />
        <Route
          path="/"
          element={
              <Dashboard />
          }
        />
        <Route
          path="/activity"
          element={
            <PrivateRoute>
              <Activity />
            </PrivateRoute>
          }
        />
        <Route path="/wallet" element={<PrivateRoute><Wallet/></PrivateRoute>}/>
        <Route path="/promotion" element={<PrivateRoute><Promotion/></PrivateRoute>}/>
        <Route path="/promotion/PromotionShare" element={<PrivateRoute><PromotionShare/></PrivateRoute>}/>
        <Route path="/promotion/TeamPartner" element={<PrivateRoute><TeamPartner/></PrivateRoute>}/>
        <Route path="/promotion/TeamReport" element={<PrivateRoute><TeamReport/></PrivateRoute>}/>
        <Route path="/promotion/MyCommission" element={<PrivateRoute><Commission/></PrivateRoute>}/>
        <Route path="/promotion/PromotionRule" element={<PrivateRoute><Promotionrule/></PrivateRoute>}/>
        <Route path="/wingo1" element={<PrivateRoute><Wingo/></PrivateRoute>}/>
        <Route path="/wingo3" element={<PrivateRoute><Wingo3/></PrivateRoute>}/>
        <Route path="/wingo5" element={<PrivateRoute><Wingo5/></PrivateRoute>}/>
        <Route path="/wingo" element={<PrivateRoute><Wingo10/></PrivateRoute>}/>

        <Route path="/wallet" element={<PrivateRoute><Withdraw/></PrivateRoute>}/>
        <Route path="/wallet" element={<PrivateRoute><WithdrawHistory/></PrivateRoute>}/>
        <Route path="/wallet/paymentPage" element={<PrivateRoute><Paymentpage/></PrivateRoute>}/>
        <Route path="/wallet/DepositHistory" element={<PrivateRoute><DepositHistory/></PrivateRoute>}/>
        <Route path="/activity/Rule" element={<PrivateRoute><Rule/></PrivateRoute>}/>
        <Route path="/main/InvitationBonus" element={<PrivateRoute><InvitationBonu/></PrivateRoute>}/>
        <Route path="/main/Laundry" element={<PrivateRoute><Laundry/></PrivateRoute>}/>
        <Route path="/main/SuperJackpot" element={<PrivateRoute><SuperJackpot/></PrivateRoute>}/>
        <Route path="/main/RedeemGift" element={<PrivateRoute><RedeemGift/></PrivateRoute>}/>
        <Route path="/activity/DailySignIn" element={<PrivateRoute><DailySignI/></PrivateRoute>}/>
        <Route path="/activity/DailySignIn/Rules" element={<PrivateRoute><Rules/></PrivateRoute>}/>
        <Route path="/activity/DailySignIn/Record" element={<PrivateRoute><Record/></PrivateRoute>}/>
        <Route path="/main/InvitationBonus/Record" element={<PrivateRoute><Records/></PrivateRoute>}/>
        <Route path="/main/SuperJackpot/rule" element={<PrivateRoute><Superjackpot_rule/></PrivateRoute>}/>
        <Route path="/main/SuperJackpot/star" element={<PrivateRoute><SuperJackpot_star/></PrivateRoute>}/>
        <Route path="/activity/DailyTasks" element={<PrivateRoute><DailyTasks/></PrivateRoute>}/>
        <Route path="/activity/DailyTasks/Record" element={<PrivateRoute><Receive/></PrivateRoute>}/>
        <Route path="/main/Laundry/LaundryRecord" element={<PrivateRoute><LaundryRecord/></PrivateRoute>}/>
        <Route path="/activity/ActivityDetail" element={<PrivateRoute><ActivityDetail/></PrivateRoute>}/>
        <Route path="/activity/FirstRecharge" element={<PrivateRoute><FirstRecharge/></PrivateRoute>}/>
        <Route path="/promotion/RebateRatio" element={<PrivateRoute><RebateRatio/></PrivateRoute>}/>
        <Route path="/promotion/Server" element={<PrivateRoute><Server/></PrivateRoute>}/>
        <Route path="/wallet/Withdraw/AddUSDT" element={<PrivateRoute><AddUSDT/></PrivateRoute>}/>
        <Route path="/wallet/TransAction" element={<PrivateRoute><TransAction/></PrivateRoute>}/>
        <Route path="/home/AllLotteryGames" element={<PrivateRoute><AllLotteryGames/></PrivateRoute>}/>
        <Route path="/main/BetRecords" element={<PrivateRoute><BetRecords/></PrivateRoute>}/>
        <Route path="/deposit/ConfirmDeposit" element={<PrivateRoute><ConfirmDeposit/></PrivateRoute>}/>
        <Route path="/main/BetRecords" element={<PrivateRoute><BetRecords/></PrivateRoute>}/>
        <Route path="/main/Feedback" element={<PrivateRoute><Feedback/></PrivateRoute>}/>
        <Route path="/main/CustomerService" element={<PrivateRoute><CustomerService/></PrivateRoute>}/>
        <Route path="/home/Messages" element={<PrivateRoute><Notification/></PrivateRoute>}/>
        <Route path="/main/Guide" element={<PrivateRoute><Guide/></PrivateRoute>}/>
        <Route path="/main/Abouts" element={<PrivateRoute><Abouts/></PrivateRoute>}/>
        <Route path="/main/AboutDetail" element={<PrivateRoute><AboutDetail/></PrivateRoute>}/>
        <Route path="/main/RiskDetail" element={<PrivateRoute><RiskDetail/></PrivateRoute>}/>
        <Route path="/deposit/UpiDeposit" element={<PrivateRoute><UpiDeposit/></PrivateRoute>}/>
        <Route path="/main/GameStats" element={<PrivateRoute><GameStats/></PrivateRoute>}/>
        <Route path="/home/Notification" element={<PrivateRoute><Message/></PrivateRoute>}/>
        <Route path="/deposit/CryptoDeposit" element={<PrivateRoute><CryptoDeposit/></PrivateRoute>}/>
        <Route path="/main/StreakBonus" element={<PrivateRoute>< StreakBonus/></PrivateRoute>}/>
        <Route path="/Avatar" element={<PrivateRoute><Avatar/></PrivateRoute>}/>
        <Route path="/Turnover" element={<PrivateRoute><Turnover/></PrivateRoute>}/>



        

        <Route path="/withdraw/addbank" element={<PrivateRoute><AddBank/></PrivateRoute>}/>







      
        {/* <Route path="/home/Messages" element={<PrivateRoute><Notification/></PrivateRoute>}/> */}
        
        <Route path="home/AllLotteryGames/5D" element={<PrivateRoute><D5/></PrivateRoute>}/>
        <Route path="home/AllLotteryGames/5D/3" element={<PrivateRoute><D53/></PrivateRoute>}/>
        <Route path="home/AllLotteryGames/5D/5" element={<PrivateRoute><D55/></PrivateRoute>}/>
        <Route path="home/AllLotteryGames/5D/10" element={<PrivateRoute><D510/></PrivateRoute>}/>


        <Route path="main/SettingCenters" element={<PrivateRoute><SettingCenters/></PrivateRoute>}/>
        <Route path="main/SettingCenter/LoginPassword" element={<PrivateRoute><LoginPassword/></PrivateRoute>}/>
        <Route path="main/SettingCenter/BindEmail" element={<PrivateRoute><BindEmail/></PrivateRoute>}/>
        <Route path="/promotion/Subordinate" element={<PrivateRoute><Subordinate/></PrivateRoute>}/>
        <Route path="/Vip" element={<PrivateRoute><Vip/></PrivateRoute>}/>

         






        <Route path="/home/AllLotteryGames" element={<PrivateRoute><AllLotteryGames/></PrivateRoute>}/>










        <Route path="/AllLotteryGames/K3" element={<PrivateRoute><K3/></PrivateRoute>}/>
        <Route path="/AllLotteryGames/K3/3" element={<PrivateRoute><K33/></PrivateRoute>}/>
        <Route path="/AllLotteryGames/K3/5" element={<PrivateRoute><K35/></PrivateRoute>}/>
        <Route path="/AllLotteryGames/K3/10" element={<PrivateRoute><K310/></PrivateRoute>}/>

       
        <Route path="/wallet/deposit" element={<PrivateRoute><Deposit/></PrivateRoute>}/>
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="/wallet/withdraw"
          element={
            <PrivateRoute>
              <Withdraw />
            </PrivateRoute>
          }
          
        />
          <Route
          path="/wallet/WithdrawHistory"
          element={
            <PrivateRoute>
              <WithdrawHistory/>
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} /> {/* Add the Logout route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
