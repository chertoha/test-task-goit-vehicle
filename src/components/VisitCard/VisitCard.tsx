import avatar from "/avatar-grey-circle.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const VisitCard = () => {
  return (
    <div className="flex justify-center items-center pt-[5vh]">
      <div className="max-w-[330px] p-10 rounded-3xl bg-[#18191d] text-[#28ddd6] flex flex-col items-center rounded-t-[160px]">
        <div className="flex justify-between flex-col-reverse items-center">
          <div className="mt-6 text-center">
            <h1 className="heading-1">Anton Chertok</h1>
            <p className="body-1 mt-1 ">Web developer</p>
          </div>

          <div className=" size-[220px] overflow-hidden rounded-full">
            <img
              src={avatar}
              alt="Anton Chertok"
              className="block w-full object-cover"
              height={220}
              width={220}
            />
          </div>
        </div>

        <div className="flex  gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/anton-chertok/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin className="size-[36px]" />
          </a>

          <a
            href="https://github.com/chertoha"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub className="size-[36px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
