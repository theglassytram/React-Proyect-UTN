import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as AxiosService from "../AxiosService";
import NotFound from "../pages/NotFound";

const CatFactInfo = () => {
  const [factDetailState, setFactDetail] = useState<any>();
  const { id }: { id: string | undefined } = useParams();

  useEffect(() => {
    AxiosService.getSpecificCatFact(id)
      .then((data: any) => {
        setFactDetail(data);
      })
      .catch((err) => {
        setFactDetail(undefined);
      });
  }, []);

  return (
    <>
      {factDetailState === undefined || factDetailState === "" ? (
        <NotFound />
      ) : (
        <>{JSON.stringify(factDetailState)} </>
      )}
    </>
  );
};

export default CatFactInfo;
