"use client";
import { useState } from "react";
import { Calendar, Clock, MapPin, BookOpen, Coffee } from "lucide-react";

type DayType = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type GroupType = "A" | "B" | "C" | "D";
type CourseType = "Computing" | "Business" | "Finance" | "Biology" | "Chemistry";

// 1. THE ULTIMATE TIMETABLE DATABASE
const scheduleData: Record<CourseType, Record<GroupType, Record<DayType, any[]>>> = {
  Computing: {
    A: {
      Monday: [{ time: "09:00 - 11:00", subject: "Web Development", room: "Lab 1", type: "Lab" }, { time: "11:00 - 13:00", subject: "Database Systems", room: "Turing Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Mathematics for IT", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Cybersecurity", room: "Lab 3", type: "Lab" }, { time: "12:00 - 14:00", subject: "Machine Learning", room: "Turing Hall", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Software Engineering", room: "Lab 2", type: "Lab" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Cloud Computing", room: "Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Networks", room: "Room 4", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Web Development", room: "Lab 1", type: "Lab" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Software Engineering", room: "Turing Hall", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Database Systems", room: "Lab 2", type: "Lab" }, { time: "14:00 - 16:00", subject: "Mathematics for IT", room: "Room 4", type: "Lecture" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Machine Learning", room: "Lab 2", type: "Lab" }, { time: "13:00 - 15:00", subject: "Cybersecurity", room: "Turing Hall", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Networks", room: "Lab 3", type: "Lab" }]
    },
    B: {
      Monday: [{ time: "10:00 - 12:00", subject: "Database Systems", room: "Lab 2", type: "Lab" }, { time: "13:00 - 15:00", subject: "Web Development", room: "Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Software Engineering", room: "Turing Hall", type: "Lecture" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Mathematics for IT", room: "Room 4", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Cybersecurity", room: "Lab 3", type: "Lab" }, { time: "14:00 - 16:00", subject: "Networks", room: "Room 4", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Machine Learning", room: "Lab 2", type: "Lab" }, { time: "12:00 - 14:00", subject: "Cloud Computing", room: "Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Database Systems", room: "Turing Hall", type: "Lecture" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Web Development", room: "Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Software Engineering", room: "Lab 2", type: "Lab" }, { time: "15:00 - 17:00", subject: "Machine Learning", room: "Turing Hall", type: "Lecture" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Cybersecurity", room: "Turing Hall", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Networks", room: "Lab 3", type: "Lab" }, { time: "14:00 - 16:00", subject: "Cloud Computing", room: "Room 4", type: "Seminar" }]
    },
    C: {
      Monday: [{ time: "09:00 - 11:00", subject: "Software Engineering", room: "Room 4", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Networks", room: "Lab 3", type: "Lab" }, { time: "14:00 - 16:00", subject: "Web Development", room: "Lab 1", type: "Lab" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Database Systems", room: "Turing Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Cloud Computing", room: "Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Mathematics for IT", room: "Room 4", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Cybersecurity", room: "Lab 3", type: "Lab" }, { time: "11:00 - 13:00", subject: "Machine Learning", room: "Lab 2", type: "Lab" }, { time: "14:00 - 16:00", subject: "Software Engineering", room: "Lab 2", type: "Lab" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Networks", room: "Room 4", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Web Development", room: "Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Database Systems", room: "Lab 2", type: "Lab" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Cloud Computing", room: "Room 4", type: "Seminar" }, { time: "12:00 - 14:00", subject: "Machine Learning", room: "Turing Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Cybersecurity", room: "Turing Hall", type: "Lecture" }]
    },
    D: {
      Monday: [{ time: "10:00 - 12:00", subject: "Mathematics for IT", room: "Room 4", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Cloud Computing", room: "Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Cybersecurity", room: "Lab 3", type: "Lab" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Software Engineering", room: "Lab 2", type: "Lab" }, { time: "11:00 - 13:00", subject: "Web Development", room: "Turing Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Networks", room: "Lab 3", type: "Lab" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Machine Learning", room: "Turing Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Database Systems", room: "Lab 2", type: "Lab" }, { time: "15:00 - 17:00", subject: "Mathematics for IT", room: "Room 4", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Cybersecurity", room: "Turing Hall", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Software Engineering", room: "Room 4", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Machine Learning", room: "Lab 2", type: "Lab" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Web Development", room: "Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Cloud Computing", room: "Room 4", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Database Systems", room: "Turing Hall", type: "Lecture" }]
    }
  },
  Business: {
    A: {
      Monday: [{ time: "09:00 - 11:00", subject: "Accounting 101", room: "Main Lecture Hall", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Business Law", room: "Room 2", type: "Lecture" }, { time: "15:00 - 17:00", subject: "HR Management", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Microeconomics", room: "Room 4", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Marketing Strategy", room: "Main Lecture Hall", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Entrepreneurship", room: "Room 2", type: "Lecture" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Business Ethics", room: "Room 2", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Accounting 101", room: "Room 4", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Business Law", room: "Main Lecture Hall", type: "Lecture" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Marketing Strategy", room: "Room 4", type: "Seminar" }, { time: "13:00 - 15:00", subject: "HR Management", room: "Room 2", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Microeconomics", room: "Main Lecture Hall", type: "Lecture" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Entrepreneurship", room: "Room 4", type: "Seminar" }, { time: "12:00 - 14:00", subject: "Business Ethics", room: "Main Lecture Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Accounting 101", room: "Room 2", type: "Seminar" }]
    },
    B: {
      Monday: [{ time: "10:00 - 12:00", subject: "Marketing Strategy", room: "Room 2", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Microeconomics", room: "Main Lecture Hall", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Entrepreneurship", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Accounting 101", room: "Room 4", type: "Seminar" }, { time: "12:00 - 14:00", subject: "Business Law", room: "Main Lecture Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "HR Management", room: "Room 2", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Business Ethics", room: "Main Lecture Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Marketing Strategy", room: "Room 4", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Microeconomics", room: "Room 2", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "HR Management", room: "Room 4", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Entrepreneurship", room: "Main Lecture Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Accounting 101", room: "Room 2", type: "Lecture" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Business Law", room: "Room 4", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Business Ethics", room: "Room 2", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Marketing Strategy", room: "Main Lecture Hall", type: "Lecture" }]
    },
    C: {
      Monday: [{ time: "09:00 - 11:00", subject: "HR Management", room: "Room 2", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Accounting 101", room: "Main Lecture Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Marketing Strategy", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Business Ethics", room: "Main Lecture Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Microeconomics", room: "Room 2", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Business Law", room: "Room 4", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Entrepreneurship", room: "Main Lecture Hall", type: "Lecture" }, { time: "12:00 - 14:00", subject: "HR Management", room: "Room 4", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Accounting 101", room: "Room 2", type: "Seminar" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Business Law", room: "Main Lecture Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Marketing Strategy", room: "Room 2", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Microeconomics", room: "Room 4", type: "Seminar" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Business Ethics", room: "Room 4", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Entrepreneurship", room: "Room 2", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Accounting 101", room: "Main Lecture Hall", type: "Lecture" }]
    },
    D: {
      Monday: [{ time: "10:00 - 12:00", subject: "Business Law", room: "Room 4", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Business Ethics", room: "Main Lecture Hall", type: "Lecture" }, { time: "15:00 - 17:00", subject: "HR Management", room: "Room 2", type: "Lecture" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Accounting 101", room: "Main Lecture Hall", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Entrepreneurship", room: "Room 4", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Marketing Strategy", room: "Room 2", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Microeconomics", room: "Room 4", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Accounting 101", room: "Room 2", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Business Law", room: "Main Lecture Hall", type: "Lecture" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Marketing Strategy", room: "Room 4", type: "Seminar" }, { time: "11:00 - 13:00", subject: "HR Management", room: "Main Lecture Hall", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Business Ethics", room: "Room 2", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Entrepreneurship", room: "Main Lecture Hall", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Microeconomics", room: "Room 2", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Accounting 101", room: "Room 4", type: "Seminar" }]
    }
  },
  Finance: {
    A: {
      Monday: [{ time: "09:00 - 11:00", subject: "Financial Math", room: "Room 8", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Macroeconomics", room: "Room 5", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Portfolio Management", room: "Room 6", type: "Lecture" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Corporate Finance", room: "Room 6", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Investment Banking", room: "Room 8", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Risk Management", room: "Room 5", type: "Lecture" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Quantitative Analysis", room: "Room 5", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Financial Math", room: "Room 8", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Macroeconomics", room: "Room 6", type: "Lecture" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Portfolio Management", room: "Room 8", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Corporate Finance", room: "Room 5", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Investment Banking", room: "Room 6", type: "Seminar" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Risk Management", room: "Room 8", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Quantitative Analysis", room: "Room 6", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Financial Math", room: "Room 5", type: "Lecture" }]
    },
    B: {
      Monday: [{ time: "10:00 - 12:00", subject: "Corporate Finance", room: "Room 6", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Risk Management", room: "Room 5", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Quantitative Analysis", room: "Room 8", type: "Lecture" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Financial Math", room: "Room 8", type: "Seminar" }, { time: "12:00 - 14:00", subject: "Macroeconomics", room: "Room 6", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Portfolio Management", room: "Room 5", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Investment Banking", room: "Room 8", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Corporate Finance", room: "Room 5", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Risk Management", room: "Room 6", type: "Lecture" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Quantitative Analysis", room: "Room 5", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Financial Math", room: "Room 8", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Macroeconomics", room: "Room 6", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Portfolio Management", room: "Room 8", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Investment Banking", room: "Room 6", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Corporate Finance", room: "Room 5", type: "Lecture" }]
    },
    C: {
      Monday: [{ time: "09:00 - 11:00", subject: "Risk Management", room: "Room 8", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Quantitative Analysis", room: "Room 5", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Financial Math", room: "Room 6", type: "Lecture" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Portfolio Management", room: "Room 8", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Corporate Finance", room: "Room 6", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Investment Banking", room: "Room 5", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Macroeconomics", room: "Room 6", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Risk Management", room: "Room 8", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Financial Math", room: "Room 5", type: "Seminar" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Quantitative Analysis", room: "Room 5", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Portfolio Management", room: "Room 8", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Corporate Finance", room: "Room 6", type: "Seminar" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Investment Banking", room: "Room 8", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Macroeconomics", room: "Room 5", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Financial Math", room: "Room 6", type: "Lecture" }]
    },
    D: {
      Monday: [{ time: "10:00 - 12:00", subject: "Portfolio Management", room: "Room 5", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Investment Banking", room: "Room 8", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Macroeconomics", room: "Room 6", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Quantitative Analysis", room: "Room 6", type: "Lecture" }, { time: "12:00 - 14:00", subject: "Financial Math", room: "Room 8", type: "Seminar" }, { time: "14:00 - 16:00", subject: "Risk Management", room: "Room 5", type: "Lecture" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Corporate Finance", room: "Room 6", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Portfolio Management", room: "Room 5", type: "Seminar" }, { time: "15:00 - 17:00", subject: "Investment Banking", room: "Room 8", type: "Lecture" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Macroeconomics", room: "Room 5", type: "Seminar" }, { time: "11:00 - 13:00", subject: "Quantitative Analysis", room: "Room 8", type: "Lecture" }, { time: "14:00 - 16:00", subject: "Financial Math", room: "Room 6", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Risk Management", room: "Room 8", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Corporate Finance", room: "Room 6", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Portfolio Management", room: "Room 5", type: "Lecture" }]
    }
  },
  Biology: {
    A: {
      Monday: [{ time: "09:00 - 12:00", subject: "Cellular Biology", room: "Bio Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Genetics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Biochemistry", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Human Anatomy", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }, { time: "15:00 - 17:00", subject: "Ecology", room: "Room 2", type: "Lecture" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Genetics", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 16:00", subject: "Biochemistry", room: "Bio Lab 1", type: "Lab" }, { time: "16:00 - 18:00", subject: "Cellular Biology", room: "Room 4", type: "Lecture" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Microbiology", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Ecology", room: "Room 2", type: "Seminar" }, { time: "14:00 - 17:00", subject: "Human Anatomy", room: "Bio Lab 2", type: "Lab" }],
      Friday: [{ time: "09:00 - 12:00", subject: "Genetics", room: "Bio Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Cellular Biology", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Biochemistry", room: "Room 4", type: "Seminar" }]
    },
    B: {
      Monday: [{ time: "10:00 - 12:00", subject: "Ecology", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }, { time: "16:00 - 18:00", subject: "Human Anatomy", room: "Room 2", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 12:00", subject: "Biochemistry", room: "Bio Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Cellular Biology", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Genetics", room: "Room 4", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Human Anatomy", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 13:00", subject: "Ecology", room: "Room 2", type: "Seminar" }, { time: "14:00 - 17:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Cellular Biology", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Genetics", room: "Bio Lab 1", type: "Lab" }, { time: "16:00 - 18:00", subject: "Biochemistry", room: "Room 4", type: "Seminar" }],
      Friday: [{ time: "09:00 - 12:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }, { time: "13:00 - 15:00", subject: "Human Anatomy", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Ecology", room: "Room 2", type: "Seminar" }]
    },
    C: {
      Monday: [{ time: "09:00 - 11:00", subject: "Genetics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Biochemistry", room: "Bio Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Cellular Biology", room: "Room 4", type: "Seminar" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Microbiology", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Ecology", room: "Room 2", type: "Seminar" }, { time: "15:00 - 18:00", subject: "Human Anatomy", room: "Bio Lab 2", type: "Lab" }],
      Wednesday: [{ time: "09:00 - 12:00", subject: "Cellular Biology", room: "Bio Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Genetics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Biochemistry", room: "Room 4", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Ecology", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Human Anatomy", room: "Bio Lab 2", type: "Lab" }, { time: "15:00 - 17:00", subject: "Microbiology", room: "Room 2", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Biochemistry", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Genetics", room: "Bio Lab 1", type: "Lab" }, { time: "16:00 - 18:00", subject: "Cellular Biology", room: "Room 4", type: "Seminar" }]
    },
    D: {
      Monday: [{ time: "10:00 - 12:00", subject: "Human Anatomy", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 15:00", subject: "Ecology", room: "Room 2", type: "Seminar" }, { time: "15:00 - 18:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }],
      Tuesday: [{ time: "09:00 - 11:00", subject: "Cellular Biology", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Genetics", room: "Bio Lab 1", type: "Lab" }, { time: "15:00 - 17:00", subject: "Biochemistry", room: "Room 4", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Ecology", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Microbiology", room: "Bio Lab 2", type: "Lab" }, { time: "16:00 - 18:00", subject: "Human Anatomy", room: "Room 2", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 12:00", subject: "Biochemistry", room: "Bio Lab 1", type: "Lab" }, { time: "13:00 - 15:00", subject: "Cellular Biology", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Genetics", room: "Room 4", type: "Seminar" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Microbiology", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Human Anatomy", room: "Bio Lab 2", type: "Lab" }, { time: "15:00 - 17:00", subject: "Ecology", room: "Room 2", type: "Seminar" }]
    }
  },
  Chemistry: {
    A: {
      Monday: [{ time: "09:00 - 12:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "13:00 - 15:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Physical Chem", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Analytical Chem", room: "Chem Lab", type: "Lab" }, { time: "16:00 - 18:00", subject: "Spectroscopy", room: "Room 8", type: "Seminar" }],
      Wednesday: [{ time: "09:00 - 11:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Physical Chem", room: "Room 8", type: "Lecture" }, { time: "15:00 - 18:00", subject: "Spectroscopy", room: "Chem Lab", type: "Lab" }],
      Friday: [{ time: "09:00 - 12:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "13:00 - 15:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }]
    },
    B: {
      Monday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Physical Chem", room: "Chem Lab", type: "Lab" }, { time: "16:00 - 18:00", subject: "Spectroscopy", room: "Room 8", type: "Seminar" }],
      Tuesday: [{ time: "09:00 - 12:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "13:00 - 15:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Physical Chem", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Analytical Chem", room: "Chem Lab", type: "Lab" }, { time: "16:00 - 18:00", subject: "Spectroscopy", room: "Room 8", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Physical Chem", room: "Room 8", type: "Lecture" }, { time: "15:00 - 18:00", subject: "Spectroscopy", room: "Chem Lab", type: "Lab" }]
    },
    C: {
      Monday: [{ time: "09:00 - 11:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Tuesday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Physical Chem", room: "Room 8", type: "Lecture" }, { time: "15:00 - 18:00", subject: "Spectroscopy", room: "Chem Lab", type: "Lab" }],
      Wednesday: [{ time: "09:00 - 12:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "13:00 - 15:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Thursday: [{ time: "10:00 - 12:00", subject: "Physical Chem", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Analytical Chem", room: "Chem Lab", type: "Lab" }, { time: "16:00 - 18:00", subject: "Spectroscopy", room: "Room 8", type: "Seminar" }],
      Friday: [{ time: "09:00 - 11:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }]
    },
    D: {
      Monday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Physical Chem", room: "Room 8", type: "Lecture" }, { time: "15:00 - 18:00", subject: "Spectroscopy", room: "Chem Lab", type: "Lab" }],
      Tuesday: [{ time: "09:00 - 12:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "13:00 - 15:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Wednesday: [{ time: "10:00 - 12:00", subject: "Physical Chem", room: "Science Theatre", type: "Lecture" }, { time: "13:00 - 16:00", subject: "Analytical Chem", room: "Chem Lab", type: "Lab" }, { time: "16:00 - 18:00", subject: "Spectroscopy", room: "Room 8", type: "Seminar" }],
      Thursday: [{ time: "09:00 - 11:00", subject: "Thermodynamics", room: "Science Theatre", type: "Lecture" }, { time: "11:00 - 14:00", subject: "Organic Chem", room: "Chem Lab", type: "Lab" }, { time: "15:00 - 17:00", subject: "Inorganic Chem", room: "Room 5", type: "Seminar" }],
      Friday: [{ time: "10:00 - 12:00", subject: "Analytical Chem", room: "Science Theatre", type: "Seminar" }, { time: "13:00 - 15:00", subject: "Physical Chem", room: "Room 8", type: "Lecture" }, { time: "15:00 - 18:00", subject: "Spectroscopy", room: "Chem Lab", type: "Lab" }]
    }
  }
};

export default function TimetablePage() {
  const [course, setCourse] = useState<CourseType>("Computing");
  const [group, setGroup] = useState<GroupType>("A");
  const [day, setDay] = useState<DayType>("Monday");

  const currentSchedule = scheduleData[course]?.[group]?.[day] || [];

  return (
    <div className="max-w-4xl mx-auto p-6 my-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-3">
          <Calendar size={36} /> My Timetable
        </h1>
      </div>
      
      {/* SELECTION DROPDOWNS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-bold text-slate-700 mb-1">Select Course</label>
          <select 
            value={course} 
            onChange={(e) => setCourse(e.target.value as CourseType)}
            className="p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 outline-none shadow-sm"
          >
            <option value="Computing">Computing</option>
            <option value="Business">Business</option>
            <option value="Finance">Finance & Accounting</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-bold text-slate-700 mb-1">Select Group</label>
          <select 
            value={group} 
            onChange={(e) => setGroup(e.target.value as GroupType)}
            className="p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 outline-none shadow-sm"
          >
            <option value="A">Group A</option>
            <option value="B">Group B</option>
            <option value="C">Group C</option>
            <option value="D">Group D</option>
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-bold text-slate-700 mb-1">Select Day</label>
          <select 
            value={day} 
            onChange={(e) => setDay(e.target.value as DayType)}
            className="p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 outline-none shadow-sm"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>

      </div>

      {/* SCHEDULE LIST DISPLAY */}
      <div className="space-y-4">
        {currentSchedule.length > 0 ? (
          currentSchedule.map((classData: any, index: number) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-5 border-l-4 border-sky-500 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-48 font-bold text-sky-700 flex items-center gap-2">
                <Clock size={18} /> {classData.time}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800">{classData.subject}</h3>
                <div className="flex gap-4 mt-2 text-slate-600 text-sm">
                  <span className="flex items-center gap-1"><MapPin size={16} /> {classData.room}</span>
                  <span className="flex items-center gap-1"><BookOpen size={16} /> {classData.type}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-12 bg-white rounded-xl border-2 border-dashed border-slate-200">
            <Coffee size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">No classes scheduled!</h3>
            <p className="text-slate-500 mt-2">Enjoy your free time on {day}, or catch up on some study in the Library.</p>
          </div>
        )}
      </div>
    </div>
  );
}