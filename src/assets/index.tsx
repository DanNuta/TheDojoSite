import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  FaCheck,
  GiCancel
} from "./icon/icon";

interface IconType {
  [key: string]: React.ReactNode;
}

export const icons: IconType = {
  email: <AiOutlineMail />,
  eyeShow: <AiOutlineEye />,
  eyeHidden: <AiOutlineEyeInvisible />,
  verify: <FaCheck/>,
  cancel: <GiCancel/>
};
