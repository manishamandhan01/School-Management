import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { GoChecklist } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { BiBuilding } from "react-icons/bi";
import { MdEmojiTransportation } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
const SideBarData = [
  {
    title: "Students",
    path: "#",
    icon: "fa-graduation-cap",

    subNav: [
      {
        title: "All Students",
        path: "/students",
      },
      {
        title: "Student Details",
        path: "/studentDetails",
      },
      {
        title: "Adminssion Form",
        path: "/admissionForm",
      },
    ],
  },
  {
    title: "Teachers",
    path: "#",
    icon: "fa-person-chalkboard",

    subNav: [
      {
        title: "All Teachers",
        path: "/teachers",
      },
      {
        title: "Teacher Details",
        path: "/teacherDetails",
      },
      {
        title: "Add Teacher",
        path: "/addTeacher",
      },
    ],
  },
  {
    title: "Parents",
    path: "#",
    icon: "fa-person-shelter",

    subNav: [
      {
        title: "All Parents",
        path: "/parents",
      },
      {
        title: "Parent Details",
        path: "/parentDetails",
      },
      {
        title: "Add Parent",
        path: "/addparent",
      },
    ],
  },

  {
    title: "Library",
    path: "#",
    icon: "fa-book-open-reader",

    subNav: [
      {
        title: "All Book",
        path: "/parents",
      },
      {
        title: "Add New Book",
        path: "/parentDetails",
      },
    ],
  },
  {
    title: "Class",
    path: "#",
    icon: "fa-chalkboard-user",

    subNav: [
      {
        title: "All Classes",
        path: "/parents",
      },
      {
        title: "Add New Class",
        path: "/parentDetails",
      },
    ],
  },
  {
    title: "Exam",
    path: "#",
    icon: "fa-list-check",

    subNav: [
      {
        title: "Exam  Schedule",
        path: "/parents",
      },
      {
        title: "Exam Grades ",
        path: "/parentDetails",
      },
    ],
  },
  {
    title: "Subject",
    path: "#",
    icon: "fa-book",
  },
  // {
  //   title: "Class Routine",
  //   path: "#",
  //   icon: <MdAddTask />,
  // },
  // {
  //   title: "Attendence",
  //   path: "#",
  //   icon: <BiBuilding />,
  // },
  {
    title: "Transport",
    path: "#",
    icon: "fa-bus",
  },
  {
    title: "Hostel",
    path: "#",
    icon: "fa-bed",
  },
];

export default SideBarData;
