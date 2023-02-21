import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  FaCheck,
  GiCancel,
  BsPerson,
  AiOutlineFileImage
} from "./icon/icon";

interface IconType {
  [key: string]: React.ReactNode;
}

export const icons: IconType = {
  email: <AiOutlineMail />,
  eyeShow: <AiOutlineEye />,
  eyeHidden: <AiOutlineEyeInvisible />,
  verify: <FaCheck/>,
  cancel: <GiCancel/>,
  person: <BsPerson/>,
  file: <AiOutlineFileImage/>
};
