export const boards = [
  {
    id: '1000001',
    name: 'Platform Launch'
  },
  {
    id: '1000002',
    name: 'Marketing Plan'
  },
  {
    id: '1000003',
    name: 'Roadmap'
  }
]

export const columns = [
  {
    id: '1000001-0',
    name: 'Todo',
    order: 1,
    boardId: '1000001'
  },
  {
    id: '1000001-1',
    name: 'Doing',
    order: 2,
    boardId: '1000001'
  },
  {
    id: '1000001-2',
    name: 'Done',
    order: 3,
    boardId: '1000001'
  },
  {
    id: '1000002-0',
    name: 'Todo',
    order: 1,
    boardId: '1000002'
  },
  {
    id: '1000002-1',
    name: 'Doing',
    order: 2,
    boardId: '1000002'
  },
  {
    id: '1000002-2',
    name: 'Done',
    order: 3,
    boardId: '1000002'
  },
  {
    id: '1000003-0',
    name: 'Now',
    order: 1,
    boardId: '1000003'
  },
  {
    id: '1000003-1',
    name: 'Next',
    order: 2,
    boardId: '1000003'
  },
  {
    id: '1000003-2',
    name: 'Later',
    order: 3,
    boardId: '1000003'
  }
]

export const tasks = [
  // Platform Launch > Todo column (id: "1000001-0")
  {
    id: '1000001-0-0',
    title: 'Build UI for onboarding flow',
    description: '',
    subtasks: [
      {
        id: '1000001-0-0-0',
        title: 'Sign up page',
        isCompleted: true
      },
      {
        id: '1000001-0-0-1',
        title: 'Sign in page',
        isCompleted: false
      },
      {
        id: '1000001-0-0-2',
        title: 'Welcome page',
        isCompleted: false
      }
    ],
    columnId: '1000001-0',
    order: 1
  },
  {
    id: '1000001-0-1',
    title: 'Build UI for search',
    description: '',
    subtasks: [
      {
        id: '1000001-0-1-0',
        title: 'Search page',
        isCompleted: false
      }
    ],
    columnId: '1000001-0',
    order: 2
  },
  {
    id: '1000001-0-2',
    title: 'Build settings UI',
    description: '',
    subtasks: [
      {
        id: '1000001-0-2-0',
        title: 'Account page',
        isCompleted: false
      },
      {
        id: '1000001-0-2-1',
        title: 'Billing page',
        isCompleted: false
      }
    ],
    columnId: '1000001-0',
    order: 3
  },
  {
    id: '1000001-0-3',
    title: 'QA and test all major user journeys',
    description:
      'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
    subtasks: [
      {
        id: '1000001-0-3-0',
        title: 'Internal testing',
        isCompleted: false
      },
      {
        id: '1000001-0-3-1',
        title: 'External testing',
        isCompleted: false
      }
    ],
    columnId: '1000001-0',
    order: 4
  },
  // Platform Launch > Doing column (id: "1000001-1")
  {
    id: '1000001-1-0',
    title: 'Design settings and search pages',
    description: '',
    subtasks: [
      {
        id: '1000001-1-0-0',
        title: 'Settings - Account page',
        isCompleted: true
      },
      {
        id: '1000001-1-0-1',
        title: 'Settings - Billing page',
        isCompleted: true
      },
      {
        id: '1000001-1-0-2',
        title: 'Search page',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 1
  },
  {
    id: '1000001-1-1',
    title: 'Add account management endpoints',
    description: '',
    subtasks: [
      {
        id: '1000001-1-1-0',
        title: 'Upgrade plan',
        isCompleted: true
      },
      {
        id: '1000001-1-1-1',
        title: 'Cancel plan',
        isCompleted: true
      },
      {
        id: '1000001-1-1-2',
        title: 'Update payment method',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 2
  },
  {
    id: '1000001-1-2',
    title: 'Design onboarding flow',
    description: '',
    subtasks: [
      {
        id: '1000001-1-2-0',
        title: 'Sign up page',
        isCompleted: true
      },
      {
        id: '1000001-1-2-1',
        title: 'Sign in page',
        isCompleted: false
      },
      {
        id: '1000001-1-2-2',
        title: 'Welcome page',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 3
  },
  {
    id: '1000001-1-3',
    title: 'Add search enpoints',
    description: '',
    subtasks: [
      {
        id: '1000001-1-3-0',
        title: 'Add search endpoint',
        isCompleted: true
      },
      {
        id: '1000001-1-3-1',
        title: 'Define search filters',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 4
  },
  {
    id: '1000001-1-4',
    title: 'Add authentication endpoints',
    description: '',
    subtasks: [
      {
        id: '1000001-1-4-0',
        title: 'Define user model',
        isCompleted: true
      },
      {
        id: '1000001-1-4-1',
        title: 'Add auth endpoints',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 5
  },
  {
    id: '1000001-1-5',
    title: 'Research pricing points of various competitors and trial different business models',
    description:
      "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    subtasks: [
      {
        id: '1000001-1-5-0',
        title: 'Research competitor pricing and business models',
        isCompleted: true
      },
      {
        id: '1000001-1-5-1',
        title: 'Outline a business model that works for our solution',
        isCompleted: false
      },
      {
        id: '1000001-1-5-2',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: false
      }
    ],
    columnId: '1000001-1',
    order: 6
  },
  // Platform Launch > Done column (id: "1000001-2")
  {
    id: '1000001-2-0',
    title: 'Conduct 5 wireframe tests',
    description: 'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
    subtasks: [
      {
        id: '1000001-2-0-0',
        title: 'Complete 5 wireframe prototype tests',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 1
  },
  {
    id: '1000001-2-1',
    title: 'Create wireframe prototype',
    description: 'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
    subtasks: [
      {
        id: '1000001-2-1-0',
        title: 'Create clickable wireframe prototype in Balsamiq',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 2
  },
  {
    id: '1000001-2-2',
    title: 'Review results of usability tests and iterate',
    description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
    subtasks: [
      {
        id: '1000001-2-2-0',
        title: 'Meet to review notes from previous tests and plan changes',
        isCompleted: true
      },
      {
        id: '1000001-2-2-1',
        title: 'Make changes to paper prototypes',
        isCompleted: true
      },
      {
        id: '1000001-2-2-2',
        title: 'Conduct 5 usability tests',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 3
  },
  {
    id: '1000001-2-3',
    title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
    description: '',
    subtasks: [
      {
        id: '1000001-2-3-0',
        title: 'Create paper prototypes for version one',
        isCompleted: true
      },
      {
        id: '1000001-2-3-1',
        title: 'Complete 10 usability tests',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 4
  },
  {
    id: '1000001-2-4',
    title: 'Market discovery',
    description:
      'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
    subtasks: [
      {
        id: '1000001-2-4-0',
        title: 'Interview 10 prospective customers',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 5
  },
  {
    id: '1000001-2-5',
    title: 'Competitor analysis',
    description: '',
    subtasks: [
      {
        id: '1000001-2-5-0',
        title: 'Find direct and indirect competitors',
        isCompleted: true
      },
      {
        id: '1000001-2-5-1',
        title: 'SWOT analysis for each competitor',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 6
  },
  {
    id: '1000001-2-6',
    title: 'Research the market',
    description:
      'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
    subtasks: [
      {
        id: '1000001-2-6-0',
        title: 'Write up research analysis',
        isCompleted: true
      },
      {
        id: '1000001-2-6-1',
        title: 'Calculate TAM',
        isCompleted: true
      }
    ],
    columnId: '1000001-2',
    order: 7
  },
  // Marketing Plan > Todo column (id: "1000002-0")
  {
    id: '1000002-0-0',
    title: 'Plan Product Hunt launch',
    description: '',
    subtasks: [
      {
        id: '1000002-0-0-0',
        title: 'Find hunter',
        isCompleted: false
      },
      {
        id: '1000002-0-0-1',
        title: 'Gather assets',
        isCompleted: false
      },
      {
        id: '1000002-0-0-2',
        title: 'Draft product page',
        isCompleted: false
      },
      {
        id: '1000002-0-0-3',
        title: 'Notify customers',
        isCompleted: false
      },
      {
        id: '1000002-0-0-4',
        title: 'Notify network',
        isCompleted: false
      },
      {
        id: '1000002-0-0-5',
        title: 'Launch!',
        isCompleted: false
      }
    ],
    columnId: '1000002-0',
    order: 1
  },
  {
    id: '1000002-0-1',
    title: 'Share on Show HN',
    description: '',
    subtasks: [
      {
        id: '1000002-0-1-0',
        title: 'Draft out HN post',
        isCompleted: false
      },
      {
        id: '1000002-0-1-1',
        title: 'Get feedback and refine',
        isCompleted: false
      },
      {
        id: '1000002-0-1-2',
        title: 'Publish post',
        isCompleted: false
      }
    ],
    columnId: '1000002-0',
    order: 2
  },
  {
    id: '1000002-0-2',
    title: 'Write launch article to publish on multiple channels',
    description: '',
    subtasks: [
      {
        id: '1000002-0-2-0',
        title: 'Write article',
        isCompleted: false
      },
      {
        id: '1000002-0-2-1',
        title: 'Publish on LinkedIn',
        isCompleted: false
      },
      {
        id: '1000002-0-2-2',
        title: 'Publish on Inndie Hackers',
        isCompleted: false
      },
      {
        id: '1000002-0-2-3',
        title: 'Publish on Medium',
        isCompleted: false
      }
    ],
    columnId: '1000002-0',
    order: 3
  },
  // Roadmap > Now column (id: "1000003-0")
  {
    id: '1000003-0-0',
    title: 'Launch version one',
    description: '',
    subtasks: [
      {
        id: '1000003-0-0-0',
        title: 'Launch privately to our waitlist',
        isCompleted: false
      },
      {
        id: '1000003-0-0-1',
        title: 'Launch publicly on PH, HN, etc.',
        isCompleted: false
      }
    ],
    columnId: '1000003-0',
    order: 1
  },
  {
    id: '1000003-0-1',
    title: 'Review early feedback and plan next steps for roadmap',
    description:
      "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
    subtasks: [
      {
        id: '1000003-0-1-0',
        title: 'Interview 10 customers',
        isCompleted: false
      },
      {
        id: '1000003-0-1-1',
        title: 'Review common customer pain points and suggestions',
        isCompleted: false
      },
      {
        id: '1000003-0-1-2',
        title: 'Outline next steps for our roadmap',
        isCompleted: false
      }
    ],
    columnId: '1000003-0',
    order: 2
  }
]
