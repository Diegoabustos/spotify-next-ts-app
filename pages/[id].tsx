import React, { useState } from "react";
import Image from "next/image";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail";
// config
import { API_URL, API_TOKEN, TOKEN_URL } from "../config";

type Props = {
  tracks: any;
  imgUrl: string;
  accesToken: string;
};

const Album = ({ imgUrl, tracks }: Props) => {

  return (
    <main>
      <AlbumDetail albumTracks={tracks} />
    </main>
  );
};

export default Album;

export async function getServerSideProps({ params: { id } }) {
  // API Access Token
  let authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `${API_TOKEN}`,
  };
  const answerToken = await fetch(`${TOKEN_URL}`, authParameters);
  const autToken = await answerToken.json();
  const token = autToken.access_token;

  let searchParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const tracksEndpoint = `${API_URL}/v1/albums/${id}/`;
  const answer = await fetch(tracksEndpoint, searchParameters);
  const tracks = await answer.json();
  return {
    props: {
      tracks,
    },
  };
}
