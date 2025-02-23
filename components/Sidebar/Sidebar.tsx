"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import navItems, { NavItemProps } from "@app/constants/SideLinks";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#121430] h-screen ${
        open ? "w-[300px]" : "w-[80px]"
      } p-5 text-gray-400 transition-width duration-300`}
      style={{ transition: "width 0.3s ease" }}
    >
      <div className="flex items-center gap-[20px] mb-6 relative">
        <Image
          height={48}
          width={48}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAMAAABj/zSlAAAAgVBMVEUMP3AAAADEolMLP28LP3BLYWYLP3AbR20IO24RRHfisk8rT2sLP3ALPm+mk1iIgl3wu00NQG4LP28LQHAKP29qcmFaamTxu02YiltpcmF6e18LP3ANQG8JPmy2m1UIP23Tq1K2mlYMQHGYilo7WGg8WWkLP28LQG8MP3EMQHD/wksbkFnNAAAAKnRSTlPyAPzj1PV58x4P/vS1W/r5/jyXiGr39v759/emTC37Pf37xPn19KZLxcTm90njAAAEB0lEQVRo3qzUC3KcMBBF0TdIgMTPGWD+jHHsOJVo/wsMcexyDKJpNdwNnGrVK2HHz3RtfXvWCkNKPxd10t13/JiU7ZtCwZMqkn5DyrYDQ3UrzSZU/+lQWreWsokCM710GuTQFEtIDAKIwkRUryFIl8GUKSCsNmFUqSBOlwGUbRBW/Ij/ayyXMjoQitxXCtrwqF4hpDxyzl0wsu4cqgyDKve3FOPaZSoRQC7CtGRKyaX0wb13AcMCKdHQN/dRDq9FUa0IchH8lfPUXQINXTHTfo4yWgIN5ZhJGT9ltQxyGWbT1ks1ImjojPkaH1WC0SFz02IQlVPKaCHkMlApM6FqLBVnzlsFsmJMlYzve6YYdPsRpaWQO2Ehbb9QCRui34/6oMDYRO6ojlhK2U9q4agDSaVgngXG0L9T0iPAPAuM+Z0o6gIwz8Ly/GJHlYOR+qA6kL1QUgRW+3fqBrIn+v1YFf8oA7Kc/370MECMgjH1JzBr36gb5FM/g1nxRmHF1H+AmbID1UM+9Qzs9gOVrJh6BXbNQBUrph6DXTFQSj71DPzUDvcVUz8jIIMOZBXxJ8UIqUMCskwITWtRg+pVCk2rQQ/w6t94jPB+4heoIh+UQ9JvaBClE+f0kkOWhgLRcQw9pJCmQFYR0OGKLcvmoczl2LBXAnIRtuzqh45/WjW7HQVhIAoLhYKFNhaRVZBNvNh14/s/4BrihqwHZkrbc6vxo/aMzp+CrMJJgre66ouFBL7YDMo4q6vLYqVgtpv9h7Z6mgPI7a+qKCCEB8LqAHL+q8oNpB31riFQAJp15uoxhT+30Otxq+Yq5q1Yocjd1QNEBVWXLmfYT1C5GUQEVdGr1WOPu0TwIFTFdWoUhBUkZ5yxDhBUAJpklpKzo0dnDoOqOh/oYlw+UdaN01FBlRv2G7ZP1F7woPz/Mxu4Tb4YmiqRmjtQn8IjA4hLRr8nVMvMIA5U/XtK3fomekLtBekE1GV+Wbn2TcoJldSkE1AVPAeeG7+/CWUpJ6AMgPirur5QidhU7HQQRmzdlSV/KLml2FFgOhSY4oVaNMb6hxkAsVeVlUSTriBKxQerfr1Jh8fqHiHK4VBEQ9WEkD6IhioOKVQI6hPsN6Mgtr78OXhV+g2V1JBBewm7QQ0OKgRY3VMKPEGMX6pHvKvS9FDp5EvBbOrIjMpMEKoiRmVwXbc0QDe4KECB4yNoXB/W6riklh5BR5RkBuuxSYiKz5L8EkQbh6RdVjvGLBwkbJyFFV5ZGXkNB8Wv4aB0wMGE3rgy1fiSamplKubBMuu1SSc3w4Tcey7tlQDzBSEKYTqLBEIU6j64cGobZW201APDaeFABIqTlWvLsEcLHA7Fa7zLpp5XfIemvZeJu34Bo9aDdqlyM2cAAAAASUVORK5CYII="
          alt="Logo"
        />
        <div
          className={`flex absolute transform ${
            open ? "left-[200px]" : "left-[45px]"
          } z-[2] bg-[#121430] justify-center items-center h-[35px] w-[35px] rounded-[50%] border-white border-2 cursor-pointer transition-transform duration-3000`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaChevronLeft className="text-white" />
          ) : (
            <FaChevronRight className="text-white" />
          )}
        </div>
      </div>
      <nav>
        <ul>
          {navItems.map((item: NavItemProps, index: number) => (
            <NavItem open1={open} key={index} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
