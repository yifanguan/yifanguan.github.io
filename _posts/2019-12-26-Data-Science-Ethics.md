---
layout: post
title:  "Data Science Ethics Notes"
date:   2019-12-26
categories: notes
---


## Data Science Ethics Notes
Link (Coursera): https://www.coursera.org/learn/data-science-ethics 

Link (Edx): https://courses.edx.org/courses/course-v1:MichiganX+DS101x+1T2019/course/ 

Professor: Prof. H.V. Jagadish 

Platform I used: Coursera 

We need to have a shared ethical framework.

# Week 1
### What are Ethics?
Nowadays, Data Science is young field. Big Data has a large impact on society. We are on the way to figure out the impact. 
Having other data scientists think about ethics in our field. 
We haven't had soceital agreement about ethics in data science. 
Ethics are shared rules we all agree to follow because of the resulting benefits. 
There is virtually no limit to what Data Science could do with data. 

Important: identify shared value

### History, Concept of Informed Consent
The Tuskegee experiment: uninformed consent

Informed consent: (1) human subject must be informed about the experiment. (2) must consent to the experiment without any coercion (3) must have the right to withdraw consent at any time

A key principle of informed consent is that the party that might potentially be harmed is the one who has to decide that on balance between risk to them and benefit to society.

Institutional Review Board (IRB): (1) balance potential harm to subjects against benefits  (2) make sure informed consent principle is properly followed (3) comprised of scientists and non-scientists (4) exception of informed consent in psychology

Prospective data collection is only required for research, not required for business. 
- A/B testing
- However, companies should not lie to us intentionally

Repurposing can be problematic. Data collected is given permission in a particular context. The context matters and you may not use it in any other context or sell it to somebody else. 
However, repurposing data is not all bad. 
- Credit card company -> credit agency (ecosystem)
- medical data is repurposed for medical research. However, the specific research questions may not be known at the time medical care is received (retrospective data analysis). 

Case study of OkCupid: OkCupid decided to try an experiment where they wanted to understand the impact on the success of a date of simply being told that you are compatible. What they did was took people who were actually not very compatible, had a low compatibility score, and falsely told them that they had a high compatibility score just to bring people together. Conversely, they also took people who had a high compatibility score and told them they had a low compatibility score. 
Having a company intentionally lie to you, intentially give you a wrong score is something that most people would consider socially unacceptable. 

### Data Ownership
The data is about you, but is the data yours?

Intellectual Property Basics
- Copyright (1. artistic expression 2. A rearrangement is a derivative work) More related to data ownership
- Patent (Idea for making or doing)
- Trade Secret (I have it, but don't tell anyone)

If I use your data, I am almost always taking some piece of what you know, merging it with what I know, and expressing something new. (1. At best, I can say I used some data from you 2. Not easy to say exactly what and exactly how much)

digitized data can preserve culture, propagate culture

data collection and curation: lots of effort to collect, clean, validate, and standardize data to place it into a form that is of immediate value. Whoever does this work deserves credit, and has onwership of the data asset

You could have data that people freely gave you, and then you could put it all together and the effort of putting it all together still gives you ownership. 
Crowd-sourced reputation sites such as Yelp or TripAdvisor, companies like this all completely have their business model reliant upon people in the community expressing their opinion about businesses that they're rating on these sites. These opinions are freely contributed by people. The key point whether the contributors are compensated or not is that the data that get collected are then the property of these data collectors and aggregators. And it is their collection and their organization and the effort that they put in to create this collection that is a thing that induces value, and they are free to sell ads, or make money off of this data in whatever manner they see fit.

There is a strong reason to record data, but also potential for misuse.
Prefer to limit use, not recording.
Voluntary limits on use
Government surveillance

Data destruction: collected data must be destroyed, not sold once the company ceases to do business

Data ownership is complex. For the most part, you do not own data about you. Data about us that somebody else has collected, is owned by whoever collected it. For privacy, have some control over these data that aren't ours, because they're about us. We need to create the principles to reason about this control.

Case study: Rate My Professor, Privacy After Bankruptcy


# Week 2
### Privacy
Privacy is a basic human need. Privacy makes you feel comfortable. It also has societal benefits, such as anonymous voting.
Today, if you have to establish a wiretap, you need to get a warrant.
Voluntary disclosure: anything you voluntarily disclose to others has much less protection than any thing you keep completely to yourself. 

Big data is universal and never forgets anything.



### Anonymity


# Week 3
### Data Validity

### Algorithmic Fairness
Algorithms can be biased. 
- Training data is not representative of the population.
- Past population is not representative of future population.
- Confounding processes lead to corrections

Bad Analysis from Good Data
- Correlated attributes
- Correct but misleading results
- P-Hacking

Racial Discrimination: proxy attributes can be found. It is not too hard to find an attribute highly correlated with races to discriminate one race.

Broader sense of discrimination: aggregate outcome (percent success) of target group differs from that of others

Correct but misleading results
![unfair visualization](/post_data/data_science_ethics/unfair_visualization.png)

Diversity Suppression (Hiring) -- This is a good example!
- Use Data science to find promising prospects
- Criteria are tuned to fit the majority
- Algorithm performs poorly on (some) minorities
- Best minority applicants are not hired => Unfair to them
- Hired minority employees are not the best (perform not as well => Unfairly besmirch others in minority)

Diversity Suppression (Medical)
- Clinical trial of new drug to treat diabetes
- Patients are actually in two groups, but pooled together because of similar glucose regulation issues
- Drug is very effective for group A
- Drug is worthless fr group B
- What happens?
- If Group A in majority: (1) Drug is found effective with suitable significance level (2) Patients in group B are also given this drug
- If Group B in majority: (1) Drug is not found effective with sufficient significance over the whole population (2) Drug is not approved, even though minority (group A) patients could have benefitted from it

P-Hacking
- Multiple hypothesis testing
- For a given single hypothesis, a p-value of 0.05 says that there is only a 5% probability of observing values by chance, without the hypothesis being true.
- What if you test 100 independent hypotheses? 
- One gene chip can have 20,000 genes.

Unreported Failures
- Independent hypotheses, tested in parallel, can have statistics developed to correct for multiple tests.
- What about sequential hypotheses, each slightly different from the previous?
- E.g. a pharma company develops dozens of dryg candidates, and tests them independently. (Most fairm, a few succeed.)

Algorithmic Fairness
- Humans have many biases.
- Biases in algorithms usually easier to measure, even if outcome is no fairer.
- Mathematical definitions of fainress can be applied, proving fairness, at least within the scope of the assumptions.

# Week 4
### Societal Consequences


### Code of Ethics

