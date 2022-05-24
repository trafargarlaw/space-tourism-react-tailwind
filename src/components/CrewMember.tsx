interface CrewMemberProps {
  setSelectedMember: React.Dispatch<React.SetStateAction<number>>;
  selectedMember: number;
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
  };
}

const CrewMember: React.FC<CrewMemberProps> = ({
  member,
  setSelectedMember,
  selectedMember,
}) => {
  return (
    <div className="flex sm:h-full flex-col sm:flex-col-reverse  mx-auto lg:pl-[165px]  lg:flex-row-reverse mt-8 sm:mt-[60px] lg:mt-0 justify-between w-full">
      <div className="flex self-center w-full justify-center items-center basis-[50%] lg:self-end">
        <div className="flex lg:justify-start justify-center h-full border-b sm:border-b-0 mx-6 w-full">
          <img
            src={member.image}
            className="h-[222px] sm:h-[456px] self-end lg:h-full "
            alt="crew member"
          />
        </div>
      </div>
      <div className="text-center lg:h-[406px] lg:justify-between lg:mb-[62px] lg:self-end lg:text-left flex flex-col sm:flex-col-reverse">
        <ul className="flex justify-center lg:justify-start gap-4 my-8">
          <li>
            <button
              data-title="0"
              className={`h-[10px] w-[10px] lg:w-[15px] lg:h-[15px] bg-white ${
                selectedMember == 0
                  ? "bg-opacity-100"
                  : "bg-opacity-[17.44%] hover:bg-opacity-50"
              } rounded-[50%] `}
              onClick={(e) => {
                setSelectedMember((e.target as any).dataset.title);
              }}
            ></button>
          </li>
          <li>
            <button
              data-title="1"
              className={`h-[10px] w-[10px] lg:w-[15px] lg:h-[15px] bg-white ${
                selectedMember == 1
                  ? "bg-opacity-100"
                  : "bg-opacity-[17.44%] hover:bg-opacity-50"
              } rounded-[50%] `}
              onClick={(e) => {
                setSelectedMember((e.target as any).dataset.title);
              }}
            ></button>
          </li>
          <li>
            <button
              data-title="2"
              className={`h-[10px] w-[10px] lg:w-[15px] lg:h-[15px] bg-white ${
                selectedMember == 2
                  ? "bg-opacity-100"
                  : "bg-opacity-[17.44%] hover:bg-opacity-50"
              } rounded-[50%] `}
              onClick={(e) => {
                setSelectedMember((e.target as any).dataset.title);
              }}
            ></button>
          </li>
          <li>
            <button
              data-title="3"
              className={`h-[10px] w-[10px] lg:w-[15px] lg:h-[15px] bg-white ${
                selectedMember == 3
                  ? "bg-opacity-100"
                  : "bg-opacity-[17.44%] hover:bg-opacity-50"
              } rounded-[50%] `}
              onClick={(e) => {
                setSelectedMember((e.target as any).dataset.title);
              }}
            ></button>
          </li>
        </ul>
        <div>
          <h2 className="font-heading opacity-50 text-astronaute-title">
            {member.role}
          </h2>
          <h1 className="font-heading text-astronaute-name">{member.name}</h1>
          <p className="font-barlow mt-4 mx-auto text-planet-description max-w-[40ch] sm:max-w-[51ch] lg:mx-0 lg:max-w-[43ch]">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrewMember;
