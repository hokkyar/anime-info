'use client';
import React, { useEffect } from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    console.log(Next13ProgressBar)
  }, [])

  return (
    <>
      {children}
      <Next13ProgressBar height="3px" color="#425fff" options={{ showSpinner: false }} showOnShallow={true} />
    </>
  );
};

export default Providers;