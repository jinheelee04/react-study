import React from "react";
import useFetchBuildingIntroduction from "./userFetchBuildingIntroduction";

function Profile({ intrcnCd }) {
  const { loading, intrcn, error } = useFetchBuildingIntroduction(intrcnCd);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      <li>id : {intrcn.id}</li>
      <li>content : {intrcn.content}</li>
    </ul>
  );
}