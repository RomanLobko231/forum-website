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

    static async createNewMessage(message, topicId) {
        await axios.post('http://localhost:8080/topics/' + topicId + '/messages', {message: message})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    static async getTopicById(id) {
        const topic = await axios.get('http://localhost:8080/topics/' + id)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error)
        });
        return topic;
    }

    static async updateTopic(topic) {
        const newTopic = {
            title: topic.title,
            description: topic.description,
            likes: topic.likes,
            dislikes: topic.dislikes,
            id: topic.id,
            timeCreated: topic.timeCreated
        }
        await axios.put('http://localhost:8080/topics', newTopic)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }
}