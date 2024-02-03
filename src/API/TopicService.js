import axios from "axios";
// const rootURL = "https://vatra.up.railway.app" 

const rootURL = "http://localhost:8080" // for local testing
export default class TopicService {

    static async getAll() {
        const response = await axios.get(rootURL + '/topics')
        return response;
    }

    static async createNewTopic(data) {
        const response = await axios.post(rootURL + '/topics', data, {
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
        await axios.post(rootURL + '/topics/' + topicId + '/messages', { message: message })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static async getTopicById(id) {
        const topic = await axios.get(rootURL + '/topics/' + id)
            .then((response) => {
                return response;
            })
        return topic;
    }

    static async getMessagesByTopicId(topidId){
        const messages = await axios.get(rootURL + "/topics/" + topidId + "/messages")
        .then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
        });
        return messages;
    }

    static async updateLikesDislikes({likes, dislikes, id}) {
        await axios.patch(rootURL + '/topics', {likes: likes, dislikes: dislikes, id: id})
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }
}