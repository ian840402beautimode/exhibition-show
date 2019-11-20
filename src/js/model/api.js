import axios from 'axios';

const domain = location.protocol + '//' + location.hostname;

// 首頁的 api
const indexRequest = axios.create({
    baseURL: domain + '/api/'
});

// Slideshow的 api
const slideshowRequest = axios.create({
    baseURL: domain + '/api/'
});

// 關於我們的 api
const aboutRequest = axios.create({
    baseURL: domain + '/api/'
});

// 服務項目的 api
const serviceRequest = axios.create({
    baseURL: domain + '/api/'
});

// 工廠介紹的 api
const factoryRequest = axios.create({
    baseURL: domain + '/api/'
});

// 最新消息的 api
const newsRequest = axios.create({
    baseURL: domain + '/api/'
});

// 聯絡我們的 api
const contactRequest = axios.create({
    baseURL: domain + '/api/'
});

// Webform的相關 api
const webformRequest = axios.create({
    baseURL: domain + '/api/'
});

// 網站系統的 api
const systemRequest = axios.create({
    baseURL: domain + '/api/'
});

// 會員系統的 api
const usersRequest = axios.create({
    baseURL: domain + '/api/'
});



// 首頁的相關 api
export const apiIndexGet = id => !id ? indexRequest.get('index'):indexRequest.get('index/'+ id);
export const apiIndexUpdate = (id,data) => indexRequest.put('index/'+ id, data);

// Slideshow的相關 api
export const apiSlideshowGet = id => !id ? slideshowRequest.get('slideshow'):slideshowRequest.get('slideshow/'+ id);
export const apiSlideshowPost = data => slideshowRequest.post('slideshow', data);
export const apiSlideshowUpdate = (id,data) => slideshowRequest.put('slideshow/'+ id, data);
export const apiSlideshowSortUpdate = (data) => slideshowRequest.put('slideshow/sort', data);
export const apiSlideshowDelete = id => slideshowRequest.delete('slideshow/'+ id);

// 關於我們的相關 api
export const apiAboutGet = id => !id ? aboutRequest.get('abouts'):aboutRequest.get('abouts/'+ id);
export const apiAboutUpdate = (id,data) => aboutRequest.put('abouts/'+ id, data);

// 服務項目的相關 api
export const apiServiceGet = id => !id ? serviceRequest.get('service'):serviceRequest.get('service/'+ id);
export const apiServiceUpdate = (id,data) => serviceRequest.put('service/'+ id, data);

// 工廠介紹的相關 api
export const apiFactoryGet = id => !id ? factoryRequest.get('factory'):factoryRequest.get('factory/'+ id);
export const apiFactoryUpdate = (id,data) => factoryRequest.put('factory/'+ id, data);

// 最新消息的相關 api
export const apiNewsGet = id => !id ? newsRequest.get('news'):newsRequest.get('news/'+ id);
export const apiNewsGetList = () => newsRequest.get('public/news');
export const apiNewsPost = data => newsRequest.post('news', data);
export const apiNewsUpdate = (id,data) => newsRequest.put('news/'+ id, data);
export const apiNewsDelete = id => newsRequest.delete('news/'+ id);

// 聯絡我們的相關 api
export const apiContactGet = id => !id ? contactRequest.get('contact'):contactRequest.get('contact/'+ id);
export const apiContactUpdate = (id,data) => contactRequest.put('contact/'+ id, data);

// Webform的相關 api
export const apiWebformGet = id => !id ? webformRequest.get('webform'):webformRequest.get('webform/'+ id);
export const apiWebformPost = data => webformRequest.post('webform', data);
export const apiWebformDelete = id => webformRequest.delete('webform/'+ id);

// 網站系統的相關 api
export const apiSystemGet = id => !id ? systemRequest.get('system'):systemRequest.get('system/'+ id);
export const apiSystemUpdate = (id,data) => systemRequest.put('system/'+ id, data);

// 會員系統的相關 api
export const apiUsersGet = id => !id ? usersRequest.get('users'):usersRequest.get('users/'+ id);
export const apiUsersPost = data => usersRequest.post('users', data);
export const apiUsersUpdate = (id,data) => usersRequest.put('users/'+ id, data);
export const apiUsersDelete = id => usersRequest.delete('users/'+ id);