 import NextAuth from 'next-auth'
// import Provider from "next-auth/providers"

// export default NextAuth({
//     providers:[
//         Provider.GitHub({
//             clientId:process.env.GITHUB_ID,
//             clientSecret:process.env.GITHUB_SECRET
//         })
//     ]
// })
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ]
})
