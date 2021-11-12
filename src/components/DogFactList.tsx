import React from "react";
import { List, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import * as AxiosService from "../AxiosService";
import { FactList } from "../interfaces/DogFactsListInterface";

const DogFactList = () => {
  const [listState, setList] = useState<Array<FactList>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AxiosService.getDogFacts()
      .then(({ data }: { data: Array<FactList> }) => {
        setList(data);
      })
      .catch(() => {
        console.log("ocurrio un error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Divider orientation="left">Dog Facts Lists</Divider>
      <List
        header={<div>List of dog Facts</div>}
        bordered
        dataSource={listState}
        loading={loading}
        renderItem={(item: FactList) => (
          <List.Item>
            <Typography.Text mark>[Fact]</Typography.Text> {item.name}
          </List.Item>
        )}
      />
    </>
  );
};

export default DogFactList;
