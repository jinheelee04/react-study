import { useState, useEffect } from "react";

function useFetchBuildingIntroduction(intrcnCd) {
  const [loading, setLoading] = useState(true);
  const [intrcn, setIntrcn] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch(`http://localhost:19073/avill/building/introduction/${intrcnCd}`)
      .then((res) => res.json())
      .then((intrcn) => {
        setIntrcn(intrcn);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [intrcnCd]);

  return { loading, intrcn, error };
}

export default useFetchBuildingIntroduction;