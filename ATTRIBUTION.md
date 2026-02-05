# Attribution

This document provides detailed attribution for all data sources used in tasks.org.ai.

## Data Sources

### O*NET 30.0 Database (August 2025)

- **Source**: [O*NET Resource Center](https://www.onetcenter.org/database.html)
- **Copyright**: U.S. Department of Labor, Employment and Training Administration (USDOL/ETA)
- **License**: CC BY 4.0
- **Data Used**: Work Activities (41), Intermediate Work Activities (331), Detailed Work Activities (2,086), Task Statements (18,797), Task-to-DWA mappings
- **Attribution Required**: Yes (required by license)
- **Changes Made**: Hierarchical structuring, MDX generation, Business-as-Code API modeling, action/object extraction

**Citation**:
```
O*NET 30.0 Database
National Center for O*NET Development
U.S. Department of Labor, Employment and Training Administration (USDOL/ETA)
https://www.onetcenter.org/database.html
Licensed under CC BY 4.0
```

**Required Notice**:
This product uses the O*NET(tm) API by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). O*NET(tm) has neither approved nor endorsed this product.

## How We Use This Data

The tasks.org.ai ontology extends O*NET work activities by:

1. **Hierarchical Structure**: WorkActivity → IWA → DWA three-level taxonomy
2. **Business-as-Code**: Modeling each DWA as a programmable API definition
3. **Cross-References**: Linking activities to occupations, tasks, skills, and abilities
4. **MDX Documentation**: Structured documentation with actors, actions, events, and workflows
5. **SDK Integration**: Enabling `@headlessly/{action}-{object}` package patterns
6. **Task Mapping**: Connecting 18,797 occupation-specific tasks to 2,086 generalized DWAs

## Our License

This derived work is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). The original O*NET data is licensed under CC BY 4.0. We apply CC BY-SA 4.0 to our derived work to ensure attribution and that improvements remain open.

## Required Attribution

When using tasks.org.ai, please include:

```
Based on tasks.org.ai (https://tasks.org.ai)
Data sourced from O*NET 30.0 Database (https://www.onetcenter.org/database.html)
U.S. Department of Labor, Employment and Training Administration
Licensed under CC BY-SA 4.0
```

## Acknowledgments

We are grateful to the National Center for O*NET Development and the U.S. Department of Labor for developing and maintaining the O*NET database, the nation's primary source of occupational information.

O*NET, the Occupational Information Network, is developed under the sponsorship of the U.S. Department of Labor, Employment and Training Administration, and replaces the Dictionary of Occupational Titles (DOT).

## Contact

For questions about attribution or licensing:
- Website: https://tasks.org.ai
- GitHub: https://github.com/dot-org-ai/tasks.org.ai/issues
- Community: https://github.com/dot-org-ai/community
