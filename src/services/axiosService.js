import axios from "axios";
import {base} from "../constants/urls";

const axiosService = axios.create({baseURL:base})

export {axiosService}