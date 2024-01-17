import axios from "axios";

export default class TopicService {
    static async getAll() {
        const response = await axios.get('http://localhost:8080/topics')
        return response;
    }

    static async createNewTopic(data) {
        const response = await axios.post('http://localhost:8080/topics', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
            return response;
    }

    static async createNewMessage(message, topicId) {
        await axios.post('http://localhost:8080/topics/' + topicId + '/messages', { message: message })
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

    static async getMessagesByTopicId(topidId){
        const messages = await axios.get("http://localhost:8080/topics/" + topidId + "/messages")
        .then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
        });
        return messages;
    }

    static async updateLikesDislikes({likes, dislikes, id}) {
        console.log(id)
        console.log(likes)
        console.log(dislikes)
        await axios.put('http://localhost:8080/topics/likes-dislikes', {likes: likes, dislikes: dislikes, id: id})
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }
}