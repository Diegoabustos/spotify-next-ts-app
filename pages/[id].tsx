import React, { useState } from "react";
import Image from "next/image";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail";
// config
import { API_URL, API_TOKEN, TOKEN_URL } from "../config";
import Header from "../components/Header/Header";
// Types
import type { Album } from "../api/types";
import { basicFetch } from "../api/fetchFunctions";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  album: Album;
  accesToken: string;
};

const Album = ({ album }: Props) => (
  <main>
    <Header />
    <AlbumDetail albumTracks={album} />
  </main>
);

export default Album;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

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

  const albumEndpoint = `${API_URL}/v1/albums/${id}/`;
  const album = await basicFetch<Album>(albumEndpoint, searchParameters);

  return {
    props: {
      album,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
