import TopicIdPage from "../components/pages/topicIdPage/TopicIdPage";
import TopicsPage from "../components/pages/topicsPage/TopicsPage";

export const routes = [
    {path: "/topics", component: <TopicsPage/>, exact: true},
    {path: '/topics/:id', component: <TopicIdPage/>, exact: true},

]