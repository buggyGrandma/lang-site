"use client";
import React, { useState } from "react";
import arrowDown from "@/public/images/courseLevel/arrow-down.svg";
import arrowUp from "@/public/images/faq/arrow-up.svg";
import Image from "next/image";
import CourseLevel from "./CourseLevel";
import Button from "../../components/Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseLevelTable from "./CourseLevelTable";
import CourseLevelTableTr from "./CourseLevelTableTr";

interface Course {
  title: string;
  price: number;
  levelLists: any;
}

const CourseLevelDetail: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {
    data: courses,
    error,
    isLoading,
  } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: () =>
      axios
        .get("https://dev.hamyarzaban.com/api/v1/Term/GetTerms")
        .then((res) => res.data),
  });
  // console.log(courses?.levelLists[0].terms[1].termNumber);

  courses?.levelLists[0].terms.map((term: any) => {
    console.log(term.termNumber);
  });

  if (isLoading) {
    return <div className="text-blue-800">is loading</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const levelData = [
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[0].id}
          title={courses?.levelLists[0].title}
          level={courses?.levelLists[0].level}
          status={courses?.levelLists[0].status}
          introduction={courses?.levelLists[0].introduction}
          nearestTime={courses?.levelLists[0].nearestTime}
          imgSrc={courses?.levelLists[0].imgSrc}
          lowestPrice={courses?.levelLists[0].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[0].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[0].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[1].id}
          title={courses?.levelLists[1].title}
          level={courses?.levelLists[1].level}
          status={courses?.levelLists[1].status}
          introduction={courses?.levelLists[1].introduction}
          nearestTime={courses?.levelLists[1].nearestTime}
          imgSrc={courses?.levelLists[1].imgSrc}
          lowestPrice={courses?.levelLists[1].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[1].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[1].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[2].id}
          title={courses?.levelLists[2].title}
          level={courses?.levelLists[2].level}
          status={courses?.levelLists[2].status}
          introduction={courses?.levelLists[2].introduction}
          nearestTime={courses?.levelLists[2].nearestTime}
          imgSrc={courses?.levelLists[2].imgSrc}
          lowestPrice={courses?.levelLists[2].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[2].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[2].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[3].id}
          title={courses?.levelLists[3].title}
          level={courses?.levelLists[3].level}
          status={courses?.levelLists[3].status}
          introduction={courses?.levelLists[3].introduction}
          nearestTime={courses?.levelLists[3].nearestTime}
          imgSrc={courses?.levelLists[3].imgSrc}
          lowestPrice={courses?.levelLists[3].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[3].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[3].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[4].id}
          title={courses?.levelLists[4].title}
          level={courses?.levelLists[4].level}
          status={courses?.levelLists[4].status}
          introduction={courses?.levelLists[4].introduction}
          nearestTime={courses?.levelLists[4].nearestTime}
          imgSrc={courses?.levelLists[4].imgSrc}
          lowestPrice={courses?.levelLists[4].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[4].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[4].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
    {
      level: (
        <CourseLevel
          id={courses?.levelLists[5].id}
          title={courses?.levelLists[5].title}
          level={courses?.levelLists[5].level}
          status={courses?.levelLists[5].status}
          introduction={courses?.levelLists[5].introduction}
          nearestTime={courses?.levelLists[5].nearestTime}
          imgSrc={courses?.levelLists[5].imgSrc}
          lowestPrice={courses?.levelLists[5].lowestPrice}
          leftCapacity={courses?.levelLists[0].terms[5].leftCapacity}
        ></CourseLevel>
      ),
      levelDetail: (
        <div>
          <CourseLevelTable>
            {courses?.levelLists[5].terms.map((term: any) => (
              <CourseLevelTableTr
                titleName={term.titleName}
                termNumber={term.termNumber}
                sectionCount={term.sectionCount}
                timePeriod={term.timePeriod}
                length={term.length}
                startDateString={term.startDateString}
                price={term.price}
                status={"ثبت نام"}
              ></CourseLevelTableTr>
            ))}
          </CourseLevelTable>
        </div>
      ),
    },
  ];

  return (
    <div className="w-[86%] lg-max:w-[91%] lg-max:mx-4 flex flex-col gap-y-4 mx-auto">
      {levelData.map((detail, index) => (
        <div key={index} className=" rounded-xl bg-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full  pl-6 lg-max:px-4 rounded-md lg-max:flex-wrap"
          >
            <div className=" w-full">{detail.level}</div>
            <div className="w-44 h-11 lg-max:w-full lg-max:mb-4">
              <Button color="primary2">
                {activeIndex === index ? (
                  <Image width={20} height={20} src={arrowUp} alt="Close" />
                ) : (
                  <Image width={20} height={20} src={arrowDown} alt="Open" />
                )}
                <p className="text-black text-sm font-medium">
                  مشاهده کلاس‌ها{" "}
                </p>
              </Button>
            </div>
          </button>
          {activeIndex === index && (
            <div className="mb-6 mx-6 rounded-lg py-4 ">
              {detail.levelDetail}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseLevelDetail;
