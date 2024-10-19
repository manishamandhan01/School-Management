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
    icon: "fa-tachometer-alt",
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "All Students",
        path: "/students",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Student Details",
        path: "/studentDetails",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Adminssion Form",
        path: "/admissionForm",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },
  {
    title: "Teachers",
    path: "#",
    icon: <FaChalkboardTeacher />,
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "All Teachers",
        path: "/teachers",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Teacher Details",
        path: "/teacherDetails",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Add Teacher",
        path: "/addTeacher",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },
  {
    title: "Parents",
    path: "#",
    icon: <RiParentFill />,
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "All Parents",
        path: "/parents",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Parent Details",
        path: "/parentDetails",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Add Parent",
        path: "/addparent",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },

  {
    title: "Library",
    path: "#",
    icon: <IoLibrary />,
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "All Book",
        path: "/parents",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Add New Book",
        path: "/parentDetails",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },
  {
    title: "Class",
    path: "#",
    icon: <SiGoogleclassroom />,
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "All Classes",
        path: "/parents",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Add New Class",
        path: "/parentDetails",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },
  {
    title: "Exam",
    path: "#",
    icon: <GoChecklist />,
    iconClosed: <IoIosArrowUp />,
    iconOpen: <MdKeyboardArrowRight />,

    subNav: [
      {
        title: "Exam  Schedule",
        path: "/parents",
        icon: <MdKeyboardArrowRight />,
      },
      {
        title: "Exam Grades ",
        path: "/parentDetails",
        icon: <MdKeyboardArrowRight />,
      },
    ],
  },
  {
    title: "Subject",
    path: "#",
    icon: "fa-tachometer-alt",
  },
  {
    title: "Class Routine",
    path: "#",
    icon: <MdAddTask />,
  },
  {
    title: "Attendence",
    path: "#",
    icon: <BiBuilding />,
  },
  {
    title: "Transport",
    path: "#",
    icon: <MdEmojiTransportation />,
  },
  {
    title: "Hostel",
    path: "#",
    icon: <IoBedSharp />,
  },
];

export default SideBarData;
