import { TimelineData } from "../types/TimelineData";

interface TimelineProps {
  timelineData: TimelineData[];
  type: "job" | "education";
}

const Timeline = ({ timelineData, type }: TimelineProps) => {
  return timelineData.map((data, index) => (
    <li className="ml-2 pl-2 relative" key={index}>
      <p className="text-s text-secondary">{type === "job" ? data.location : data.duration + " " + data.durationType}</p>
      <div className="flex items-center gap-2 before:content-[''] before:absolute before:w-3 before:h-3 before:-left-[15px] before:bg-accent before:rounded-full">
        <h3 className="text-2xl font-bold">{data.company}</h3>
        {type === "job" ? 
          <p className="text-xl text-secondary"> {data.duration} {data.durationType} </p> 
        : null}
      </div>
      <ul className="mb-10 list-inside list-disc text-secondary">
        {data.descriptionList.map((item, index) => (
          <li key={index} className="">
            <span className="">{item}</span>
          </li>
        ))}
      </ul>
    </li>
  ));
};

export default Timeline;
