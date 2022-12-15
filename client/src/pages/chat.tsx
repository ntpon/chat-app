import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IChat } from "../types/chat";

function Chat() {
  const [chats, setChats] = useState<IChat[]>([
    {
      id: 1,
      message: "Hello",
      positionName: "Frontend Developer",
      createdAt: "12:00 น.",
      updatedAt: "12:00 น.",
      user: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "https://placekitten.com/200/300",
      },
      messages: [
        {
          id: 1,
          chatId: 1,
          content: "Hello",
          createdAt: "12:00 น.",
          updatedAt: "12:00 น.",
          user: {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            avatar: "https://placekitten.com/200/300",
          },
          userType: "jsk",
          idUser: 1,
          isRead: true,
          isOwn: true,
        },
        {
          id: 2,
          chatId: 1,
          content: "Hello 2",
          createdAt: "12:00 น.",
          updatedAt: "12:00 น.",
          user: {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            avatar: "https://placekitten.com/200/300",
          },
          userType: "jsk",
          idUser: 1,
          isRead: true,
          isOwn: true,
        },
        {
          id: 3,
          chatId: 1,
          content: "Hi there !",
          createdAt: "12:00 น.",
          updatedAt: "12:00 น.",
          user: {
            id: 1,
            firstName: "Na",
            lastName: "Na",
            avatar: "https://placekitten.com/200/300",
          },
          userType: "hr",
          idUser: 2,
          isRead: true,
          isOwn: false,
        },
      ],
    },
    {
      id: 2,
      message: "Hi there !",
      positionName: "Fullstack Developer",
      createdAt: "12:00 น.",
      updatedAt: "12:00 น.",
      user: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        avatar: "https://placekitten.com/200/300",
      },
    },
  ]);

  const [currentIdChat, setCurrentIdChat] = useState<number>(1);

  const getCurrentChat = () => {
    return chats.find((chat) => chat.id === currentIdChat);
  };

  const getFullName = () => {
    return `${getCurrentChat()?.user.firstName} ${
      getCurrentChat()?.user.lastName
    }`;
  };

  const getPositionName = () => {
    return `${getCurrentChat()?.positionName}`;
  };
  const getMessages = () => {
    return getCurrentChat()?.messages || [];
  };
  return (
    <div className="container mx-auto flex justify-center items-center mt-10">
      <div className="bg-[#F1F7FA] h-[722px] w-[1127px] p-5 mx-auto flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-5 w-[970px] h-[648px]">
          <div className="border-b-2 p-1">
            <h1>Direst Message</h1>
          </div>
          <div className="flex p-1">
            <div className="w-1/4 border-r-2 h-[600px]">
              {/* side bar for list user chat */}
              <div className=""></div>
              {/* search chat */}
              <div className="flex items-center mt-2 mr-2">
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 p-2 rounded-sm bg-[#EFEFEF] border-none"
                  placeholder="ค้นหาข้อความและแชท"
                />
              </div>

              <div className="mr-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="my-2 rounded-md hover:bg-slate-100 py-3 px-2 cursor-pointer"
                    onClick={() => setCurrentIdChat(chat.id)}
                  >
                    <div className="flex items-center ">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={chat.user.avatar}
                          alt="cat"
                        />
                      </div>
                      <div className="ml-3 w-full">
                        <div className="flex">
                          <div className="w-full">
                            <div className="text-sm font-medium text-gray-900">
                              {chat.user.firstName} {chat.user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {chat.message}
                            </div>
                          </div>
                          <div className="self-end w-full">
                            <div className="text-[10px] text-gray-500 text-right">
                              {chat.updatedAt}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/4">
              <div className="flex items-center border-b-2 pb-2 pl-3">
                {/* circle avatar */}
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://placekitten.com/200/300"
                    alt="cat"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="mb-0 h-6 text-[18px]">{getFullName()}</h3>
                  <p className="text-[16px] text-gray-400">
                    {getPositionName()}
                  </p>
                </div>
              </div>

              <div className="mt-2 h-[350px]">
                {getMessages().map((message) => (
                  <div
                    key={message.id}
                    className={`${
                      message.isOwn ? "flex justify-end" : "flex justify-start"
                    } mb-2`}
                  >
                    <div
                      className={`${
                        message.isOwn
                          ? "bg-[#F1F7FA] rounded-md p-2 mr-2"
                          : "bg-[#F9FAFB] rounded-md p-2 ml-2"
                      } px-5`}
                    >
                      <p className="text-[14px]">{message.content}</p>
                      <p className="text-[10px] text-gray-400 text-right">
                        {message.updatedAt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                {/* input chat */}
                <div className="pl-2 flex items-start py-2 border-t-2 ">
                  <textarea
                    className="w-full focus:border-none focus:outline-none"
                    placeholder="พิมพ์ข้อความ..."
                    rows={4}
                  ></textarea>
                </div>
                {/* file or image */}
                <div className="flex justify-between items-center p-2 py-2 bg-[#F9FAFB]">
                  <div className="flex space-x-5 ml-5">
                    <FontAwesomeIcon icon="image" className="cursor-pointer" />
                    <FontAwesomeIcon
                      icon="paperclip"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="pr-2">
                    <FontAwesomeIcon
                      icon="paper-plane"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
