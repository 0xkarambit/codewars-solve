# RUN
# action -> TEST
# order 3
# this refers to the 2nd (relatively) run POST request when **TEST** action takes place.

## response
{
   "type":"execution success",
   "stdout":"",
   "stderr":"Unhandled rejection TestError: Expected: '91002328220491911630239667963', instead got: '9.100232822049192e+28'\n",
   "exitCode":1,
   "wallTime":727,
   "timedOut":false,
   "message":"",
   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTVmY2YxMWQxYWQzMDAwOGY2ZjgzZiIsImNpcGhlcmVkIjpbInNldHVwIl0sImNvbXBsZXRlZCI6ZmFsc2UsIndhbGxUaW1lIjo3MjcsImlhdCI6MTYwODkxODQ0OSwiZXhwIjoxNjA4OTE5MDQ5LCJpc3MiOiJjb2RlcnVubmVyIn0.B5qC3JwADTRc_LA1NntshbwslYk3q6Ip9-4stvdfZ58",
   "result":{
      "serverError":false,
      "completed":false,
      "output":[
         {
            "t":"describe",
            "v":"Add two numbers",
            "p":false,
            "items":[
               {
                  "t":"it",
                  "v":"should pass basic tests",
                  "p":false,
                  "items":[
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '2'"
                     },
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '579'"
                     },
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '1110'"
                     },
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '1441'"
                     },
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '468'"
                     },
                     {
                        "t":"passed",
                        "v":"Test Passed: Value == '201'"
                     },
                     {
                        "t":"failed",
                        "v":"Expected: '91002328220491911630239667963', instead got: '9.100232822049192e+28'"
                     },
                     {
                        "t":"completedin",
                        "v":"3"
                     }
                  ]
               },
               {
                  "t":"completedin",
                  "v":"5"
               }
            ]
         }
      ],
      "successMode":"assertions",
      "passed":6,
      "failed":1,
      "errors":0,
      "error":null,
      "assertions":{
         "passed":6,
         "failed":1,
         "hidden":{
            "passed":0,
            "failed":0
         }
      },
      "specs":{
         "passed":0,
         "failed":1,
         "hidden":{
            "passed":0,
            "failed":0
         }
      },
      "unweighted":{
         "passed":0,
         "failed":1
      },
      "weighted":{
         "passed":6,
         "failed":1
      },
      "timedOut":false,
      "wallTime":727,
      "testTime":5,
      "tags":null
   }
}

## observations

token is same across run and authorize request even between 2 different TEST actions. 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXBzIjpbXSwiaWF0IjoxNjA4OTE4NDQ4LCJleHAiOjE2MDg5MTkwNDgsInN1YiI6ImNvZGV3YXJzfDViYWI1NWNjNzY0MjMxYTQyMzAwMDM1NSJ9.U4AJZJ4oWz6up86YHrKYPo5UeGiecMN95myetDAtlFc