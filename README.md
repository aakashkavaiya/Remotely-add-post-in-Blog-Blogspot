Enable Post By Email Option in Your Blog and Get the Your Email Address for Sending Mail.

For Full Explaination Go to This Post : Add Post by Email

**Make a Google Form and add Below fields**
- Email
- Subject/Title
- Post

Link this form to Google Sheet (Prefer New sheet from Responses)

Add Summary Column to get Email Response

**Check out This Google Sheet to See how it should look: [Demo Sheet](https://docs.google.com/spreadsheets/d/1M0qAO59qtOmu7hZTSC5aPlIVJkjkhWkCTinVkCO_738/copy "Demo Sheet")**

In Google Sheet go to `Tools > Script Editor`

in Script Editor clear all text and Past Code from Code.js and Click on `Save :fa-file-text-o: `

Now go to `Trigger` option and Click on `Add Trigger` Button (Right Bottom Side)
Add `Select event source` it should be on From `Spreadsheet`

Now in `Select event type` click on `On Submit` and hit the `Save` Button.

Now you are ready to Go. Just Keep Below things in your mind

How to Add Title , Post in Form

- In Email Field: Enter Your Blog Email Address which you got from Setting
- In Subject Field: Add Title of Post
- In Post Filed: Add Post Content and at the End of Text add `#end`
