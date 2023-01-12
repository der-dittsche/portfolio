import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => {
    return {
      userdetails: [
        {
          surname: "Dietrich",
          lastname: "Sascha",
        },
      ],
      biography: [
        {
          id: "1",
          content:
            "After I finished my education, I worked as an IT administrator for 15 years. I got a deep insight into all server technologies. It was a great feeling to solve the problems of my users and meet the requirements of the customers.",
        },
        {
          id: "2",
          content:
            "In my last job I got to know the field of sensor-based monitoring and was responsible for the visualization of data for our customers. In order to expand my knowledge, I decided to participate in a further education in the field of webapp development (in the summer of 2022).",
        },
        {
          id: "3",
          content:
            "Through this I discovered my even greater passion for website development. From now on I’m going to implement projects exclusively in this area in the future.",
        },
      ],
      education: [
        {
          id: "1",
          date: "2022/11",
          title: "Vue.js & TypeScript Intensiv-Schulung",
          company: "workshops.de",
          content:
            "Construction of webapps in the framework Vue.js based on TypeScript",
        },
        {
          id: "2",
          date: "since 2022/07",
          title: "Web-Developer",
          company: "Coding Bootcamp Europe",
          content:
            "Develeoping Website based on HTML / CSS / JS | Framework Vue.js | Unit and E2E testing with Jest and Cypress",
        },
        {
          id: "3",
          date: "2010/06 – 2010/10",
          title: "MCITP Enterprise Administrator",
          company: "FutureTraining",
          content: "",
        },
        {
          id: "4",
          date: "2003/09 – 2006/06",
          title: "IHK: IT-System-Kaufmann (Apprenticeship)",
          company: "Deutsche Telekom",
          content: "",
        },
      ],
      expierience: [
        {
          id: "1",
          date: "2021/12 - 2022/12",
          title: "Webapp-Developer & IT-Administor",
          company: "digiblue GmbH",
          content:
            "Deployment and configuration of internal IT infrastructure, webapp- development for data visualization in project-related customer use-case, project-related communication with customers",
        },
        {
          id: "2",
          date: "2019/04 - 2010/07",
          title: "IT-Administor",
          company:
            "Indeed Germany | Pieritz select* | RHT | KI-Group GmbH | Jerocom GmbH | Hays Professional Solution GmbH | Jar Media GmbH | Job@tive |AixConcept GmbH | NetCologne GmbH | Marko-Medien-Dienst GmbH",
          content: "",
        },
        {
          id: "3",
          date: "2010/04 – 2010/06",
          title: "Service-Technician",
          company: "Hemmersbach GmbH & Co KG",
          content: "",
        },
        {
          id: "4",
          date: "2010/04 – 2010/06",
          title: "UHD-Employee",
          company:
            "Comline Computer&Softwarelösungen AG | Ducon Consulting GmbH | TechTeam International AG",
          content: "",
        },
      ],
    };
  },
});
