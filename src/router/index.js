import MainPage from "../components/pages/mainPage/MainPage";
import TermsAndConditionsPage from "../components/pages/terms'n'conditions/TermsAndConditionsPage";
import TopicIdPage from "../components/pages/topicIdPage/TopicIdPage";
import TopicsPage from "../components/pages/topicsPage/TopicsPage";
import UserProfilePage from "../components/pages/userProfile/UserProfilePage";
import VerifyPage from "../components/pages/verifyUserPage/VerifyPage";

export const routes = [
    {path: "/topics", component: <TopicsPage/>, exact: true},
    {path: '/topics/:id', component: <TopicIdPage/>, exact: true},
    {path: '/main', component: <MainPage/>, exact: true},
    {path: '/terms-conditions', component: <TermsAndConditionsPage/>, exact: true},
    {path: '/my-profile', component: <UserProfilePage/> , exact: true},
    {path: '/verify', component: <VerifyPage/> , exact: true},
    {path: '*', component: <MainPage/> , exact: true}


]