import axios from "axios";

export default class TopicService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/topics')
        return response;
    }

    static async createNewTopic(topic) {
        await axios.post('http://localhost:8080/topics', { title: topic.title, description: topic.description })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}