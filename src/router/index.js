import MainPage from "../components/pages/mainPage/MainPage";
import TermsAndConditionsPage from "../components/pages/terms'n'conditions/TermsAndConditionsPage";
import TopicIdPage from "../components/pages/topicIdPage/TopicIdPage";
import TopicsPage from "../components/pages/topicsPage/TopicsPage";

export const routes = [
    {path: "/topics", component: <TopicsPage/>, exact: true},
    {path: '/topics/:id', component: <TopicIdPage/>, exact: true},
    {path: '/main', component: <MainPage/>, exact: true},
    {path: '/terms-conditions', component: <TermsAndConditionsPage/>, exact: true},
    {path: '*', component: <MainPage/> , exact: true}

]