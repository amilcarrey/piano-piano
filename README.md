# Piano-Piano

### Flow
1. User will upload it's profile information (skills with seniority, experience and about)
2. Then select a job 
3. The app will create a recommendation letter given the user profile and the requested job description using ChatGPT API

## Endpoints
- GET: profile
- POST: profile
- GET: presentation
- POST: presentation
- GET: jobs

No CRUD for the jobs by the time

## Models?

```C#
public class Profile
{
    public int Id { get; set; }
    public string FirstName { get; set; } 
    public string LastName { get; set; }
    public string About { get; set; }
    public string Role { get; set; }
    public IEnumerable<Skill> Skills { get; set; }
    public IEnumerable<Experience> Experience { get; set; }
}

public class Skill
{
    public string Name { get; set; }
    public int Level { get; set; }
    public int ProfileId { get; set; }
}

public class Experience
{
    public string CompanyName { get; set; }
    public string Description { get; set; }
    public string Role { get; set; }
    public int ProfileId { get; set; }
}

public class User
{
    public int Id { get; set; }
    public int ProfileId { get; set; }
}

public class Presentation
{
    public int Id { get; set; }    
    public int ProfileId { get; set; }
    public int JobId { get; set; }
    public string PresentationLetter { get; set; }
}

public class Job
{
    public int Id { get; set; }    
    public string CompanyName { get; set; }
    public string Description { get; set; }
}
````

# Tech stack
## Front
- react with Vite

## Database
- postgreSql hosted in supabase

## Backend 
- .Net Core 7.0 Minimal API

# Chat GPT prompts

YT video: https://www.youtube.com/watch?v=vlpEShQInLo&t=353s

## Cover letter prompt
Act as **&lt;Profile rol&gt;**. Write a cover letter based on this job description:  
 
**&lt;Job description&gt;**  
  
*We should also add user experience and skills*. Something like:  
Act as **&lt;Profile Rol&gt;**. With the following experience: 
  
**&lt;Profile experiences&gt;**

And the following skills and seniority:
  
**&lt;Profile skills&gt;**
  
Write a cover letter based on this job description:  
 
**&lt;Job description&gt;**
