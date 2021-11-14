import React from "react";
import { List, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import * as AxiosService from "../AxiosService";
import { CatFacts } from "../interfaces/CatFactsListInterface";

const CatFactList = () => {
  const [listState, setList] = useState<Array<CatFacts>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AxiosService.getCatFacts()
      .then(({ data }: { data: Array<CatFacts> }) => {
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
      <Divider orientation="left">Cat Facts Lists</Divider>
      <List
        header={<div>List of cat Facts</div>}
        bordered
        dataSource={listState}
        loading={loading}
        renderItem={(item: CatFacts) => (
          <List.Item>
            <Typography.Text mark>[Fact]</Typography.Text> {item.text}
          </List.Item>
        )}
      />
    </>
  );
};

export default CatFactList;
