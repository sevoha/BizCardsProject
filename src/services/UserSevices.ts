import axios from "axios";
import User from "../interfaces/User";
import { log } from "console";

// let api: string = `${process.env.REACT_APP_API}/users`;
let api: string = "http://localhost:8000/users";
export function getUser() {
  return axios.get(api);
}

export function checkUser(userToCheck: User) {
  let endpoint = `${api}?email=${userToCheck.email}&password=${userToCheck.password}`;
  return axios.get(endpoint);
}


export function adduser(newUser: User) {
  return axios.post(api, newUser);
}


export function getUserByEmail(email: string) {
  let response = axios.get(`${api}?email=${email}`);
  return response;

}
export function deleteUser(id: number) {
  return axios.delete(`${api}/${id}`);
}