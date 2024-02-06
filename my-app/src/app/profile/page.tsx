import React from "react";

interface CardProps {
  id: string;
  name: string;
  description: string;
}

interface UserProps {
  id: string;
  type: "admin" | "None";
  name: string;
}

export default function Page() {
  const arr: CardProps[] = Array.from({ length: 15 }, () => ({
    id: "",
    name: "測試",
    description: "測試測試測試測試測試測試測試測試測試",
  }));

  let dataArr: Array<Partial<CardProps>> = [];
  dataArr.push({
    id: "1",
    name: "123",
  });
  let dataArr2: Array<Omit<CardProps, "name">> = [];
  dataArr2.push({
    id: "1",
    description: "123",
  });

  let dataArr3: Array<Pick<CardProps, "name">> = [];
  dataArr3.push({
    name: "11",
  });

  const memberData: Array<Partial<Pick<CardProps, "name"> & UserProps>> = [];

  memberData.push({
    id: "123",
    name: "ray",
  });
  console.log(memberData);
  return (
    <div>
      {arr.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
