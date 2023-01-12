import { defineStore } from "pinia";

export const useTestimonialStore = defineStore("testimonialsStore", {
  state: () => {
    return {
      testimonials: [
        {
          id: "1",
          content:
            "In addition to his very good technical knowledge, Sascha consistently demonstrates a high level of motivation. He demonstrates his reliability and high quality of results even in times of high stress.”",
          name: "Max",
          company: "digiblue GmbH",
          position: "Co-Worker",
        },
        {
          id: "2",
          content:
            "We value Mr. Dietrich as a highly reflective, very reliable and determined employee whose relationship with superiors, colleagues and customers is always professional and friendly.",
          name: "Stefan",
          company: "digiblue GmbH",
          position: "Supervisior",
        },
        {
          id: "3",
          content:
            "He really was committed into his work. As he had to work on-location he was doing the major part of his operations independently. Our clients were happy with him and gave us feedback on his great work.",
          name: "Julian",
          company: "JAR Media",
          position: "Supervisior",
        },
      ],
    };
  },
});
