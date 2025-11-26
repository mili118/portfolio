# What if Better AI Inference Isn't About Better Models?

### What is Semantic Data Engineering?

At its core, semantic data engineering uses ontologies—formal representations of concepts and their relationships—to structure data in ways that make meaning explicit. Regular data tells you what things are. Semantic data tells you what things are, how they relate to each other, what they mean in context, and why those relationships matter.

## A potentially problematic approach

The AI / ML research community has been obsessed with architecture. We went from basic neural networks to convolutional neural networks (CNNs) for vision. Then recurrent neural networks (RNNs) for sequences. Then LSTMs to handle the memory problem. Then attention mechanisms. Then Transformers, which dominated everything. Now we're seeing Mamba and state space models promising to be the next big leap.

The issue is that you can only squeeze so much performance out of architectural innovation. At some point, you're just rearranging the same fundamental building blocks. The model gets bigger, the training gets more expensive, and the improvements get smaller. We're spending billions of dollars chasing marginal gains.

## The data problem

Reasoning in models is not just enabled by the model architecture itself, but the underlying **semantic structure in the data** plays a large role in this process. When LLMs can answer complex questions, it's because the training data contains semantic relationships: concepts, hierarchies, analogies, and onologies to map out relationships.

But a lot of the times, the data fed into these mdoels are semantically messy and lack an actual structural representation.

In specialized domains like healthcare, finance, or scientific research, the data is often lacks clarity:
- Different databases use different terms for the same concept
- Relationships between entities are implicit, not explicit
- Context that humans understand instinctively is absent

A highly sophisticated architecture could be trained on this data, and it'll still struggle with inference because **the semantic structure isn't there**.

## The Real Solution: Semantic Data Engineering

Instead of tweaking model architectures, we intend to engineer the data itself to be semantically rich. This data cleaning or preprocessing in the traditional sense, but about fundamentally restructuring data to encode meaning, relationships, and context in ways that AI models can actually leverage for reasoning.

To accomplish this, we're introducing **Semantics 2.0**: ontologies specifically designed to enhance AI inference:

- **Machine native**: Built for computational reasoning, not human browsing
- **Inference optimized**: Structured to enable the kinds of logical connections AI models need
- **Scalable**: Can handle the massive, heterogeneous datasets that modern AI requires
- **Context-aware**: Encode domain knowledge that models can't learn from data alone

 If you give a model data that's been semantically enriched with domain knowledge, explicit relationships, and contextual information, the model doesn't have to work as hard to infer meaning because the semantic structure does most of the work.


## Why Test on Pharmaceutical Research

We're testing this hypothesis specifically on pharmaceutical drug discovery for a couple of reasons:

Drug discovery involves reasoning across wildly different types of data:
- Genomic sequences and protein structures
- Chemical compound libraries  
- Clinical trial outcomes
- Adverse event reports
- Scientific literature (millions of papers)
- Real-world patient data

Each of these exists in different formats, uses different terminologies, and captures different aspects of biology and medicine. An AI model trying to predict whether a drug will work for a specific disease has to connect:
- Genetic mutations -> protein dysfunction -> disease symptoms
- Chemical structure -> biological activity -> therapeutic effect
- Preclinical results -> clinical outcomes -> safety profiles

Drug discovery also has clear success metrics:
- Can your model predict which drug candidates will actually work? (Most fail)
- Can it identify safety issues before expensive clinical trials?
- Can it generalize to rare diseases where training data is scarce?

If semantic data engineering improves these outcomes, we've proven something fundamental about how data structure affects AI inference.

# Why I think this is meaningful

As a third year undergraduate student, I don't have the formal experience and expertise to make 
meaningful contributions to the development of these AI models, as this is something that typically requires many years of dedicated research and deep expertise in relevant coursework. 

But semantic data engineering is different. Structuring data, understanding domain relationships, building ontologies are these are more accessible. You don't need a PhD in machine learning to contribute meaningfully. You need domain knowledge, careful thinking about relationships and context, and good data engineering practices.

This is important because there's traditionally been so much hype around architecture: where everyone wants to build the next Transformer or some new groundbreaking architecture. But data engineering is seen as an unglamorous infrastructure work.

I think people may have it backwards. What if the most impactful contributions to AI progress right now aren't coming from fancier architectures, but from people who deeply understand their domain and can encode that understanding into data structure? Semantic data engineering opens up AI research to a much broader group of contributors. You don't need access to massive compute clusters or specialized ML expertise, but you need to understand your data and think carefully about how to represent meaning.

**More Info:**  
- SPARK AI Consortium: https://sparkai.network/
- UC San Diego Supercomputer Center: www.sdsc.edu