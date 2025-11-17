# Attribution

This document provides detailed attribution for all data sources used in tasks.org.ai.

## Data Sources

### O*NET Task Statements 28.0

- **Source**: [O*NET OnLine](https://www.onetonline.org)
- **License**: Public Domain (U.S. Government Work)
- **Copyright**: U.S. Department of Labor/Employment and Training Administration
- **Data Used**: 19,000+ task statements across 923 occupations
- **Attribution Required**: Yes (courtesy)
- **Changes Made**: GraphDL semantic parsing, verb extraction, workflow mapping

**Citation**:
```
O*NET 28.0 Task Statements
U.S. Department of Labor, Employment and Training Administration
https://www.onetonline.org
Public Domain
```

## How We Use This Data

The tasks.org.ai ontology extends O*NET Task Statements by:

1. **Semantic Parsing**: Extracting verbs and objects using GraphDL patterns
2. **Workflow Mapping**: Connecting tasks to business processes and autonomous agent operations
3. **Capability Definitions**: Defining what autonomous agents can accomplish
4. **Task Hierarchies**: Building relationships between tasks and occupations
5. **Business-as-Code Integration**: Enabling `$.Agent.executes.Task` semantic patterns
6. **SDK Integration**: Seamless integration with sdk.do and the .org.ai ecosystem

## Our License

This derived work is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). While the original O*NET data is in the Public Domain, we apply CC BY-SA 4.0 to our derived work to ensure attribution and that improvements remain open.

## Required Attribution

When using tasks.org.ai, please include:

```
Based on tasks.org.ai (https://tasks.org.ai)
Data sourced from O*NET 28.0 Task Statements (https://www.onetonline.org)
U.S. Department of Labor, Employment and Training Administration
Licensed under CC BY-SA 4.0
```

## Acknowledgments

We are grateful to the U.S. Department of Labor's Employment and Training Administration for the comprehensive task statements in O*NET. These detailed descriptions of work activities across hundreds of occupations enable better understanding of job requirements and workforce development.

## Contact

For questions about attribution or licensing:
- Website: https://tasks.org.ai
- GitHub: https://github.com/dot-org-ai/tasks.org.ai/issues
- Community: https://github.com/dot-org-ai/community

## Updates

This attribution document is maintained alongside the tasks.org.ai repository. Last updated: 2025-01-17
