import api from './api';

export default class TopicService {

    static async getAll() {
        const response = await api.get('/topics')
        return response;
    }

    static async createNewTopic(data) {
        const response = await api.post('/topics', data, {
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
        await api.post('/topics/' + topicId + '/messages', { message: message })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static async getTopicById(id) {
        const topic = await api.get('/topics/' + id)
            .then((response) => {
                return response;
            })
        return topic;
    }

    static async getMessagesByTopicId(topidId){
        const messages = await api.get("/topics/" + topidId + "/messages")
        .then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
        });
        return messages;
    }

    static async updateLikesDislikes({likes, dislikes, id}) {
        await api.patch('/topics', {likes: likes, dislikes: dislikes, id: id})
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }
}