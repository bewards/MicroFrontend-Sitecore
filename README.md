## Intro
Run your SitecoreAI instance from multiple Next.js applications using Module Federation! This monorepo contains 3 projects: 

`mf_catalog`: A Next.js project containing components and API routes used by `mf_marketing`
`mf_marketing`: A Sitecore JSS project containing components and page routes that connects to your SitecoreAI (XM Cloud) tenant
`mf_proxy`: The node server for proxying the two apps

## Pre-Requisites
- `mf_marketing` requires an updated `.env.local` file with your Sitecore credentials

## Running The Apps
Use seperate terminals to cd into both catalog and marketing apps.

`mf_catalog`: `npm i && npm run dev`
`mf_marketing`: `npm i && npm run start:connected`
