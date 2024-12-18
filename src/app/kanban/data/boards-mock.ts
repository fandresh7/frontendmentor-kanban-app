import { Board } from '../interfaces/boards'

export const BOARDS: Board[] = [
  {
    id: '64aefb2f4f4d88a29b7e129c',
    name: 'Platform Launch',
    columns: [
      {
        id: '64aefb2f4f4d88a29b7e129d',
        name: 'Todo',
        tasks: [
          {
            id: '64aefb2f4f4d88a29b7e129e',
            title: 'Build UI for onboarding flow',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e129f',
                title: 'Sign up page',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12a0',
                title: 'Sign in page',
                isCompleted: false
              },
              {
                id: '64aefb2f4f4d88a29b7e12a1',
                title: 'Welcome page',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12a2',
            title: 'Build UI for search',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12a3',
                title: 'Search page',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12a4',
            title: 'Build settings UI',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12a5',
                title: 'Account page',
                isCompleted: false
              },
              {
                id: '64aefb2f4f4d88a29b7e12a6',
                title: 'Billing page',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12a7',
            title: 'QA and test all major user journeys',
            description: 'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
            status: 'Todo',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12a8',
                title: 'Internal testing',
                isCompleted: false
              },
              {
                id: '64aefb2f4f4d88a29b7e12a9',
                title: 'External testing',
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: '64aefb2f4f4d88a29b7e12aa',
        name: 'Doing',
        tasks: [
          {
            id: '64aefb2f4f4d88a29b7e12ab',
            title: 'Design settings and search pages',
            description: '',
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12ac',
                title: 'Settings - Account page',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12ad',
                title: 'Settings - Billing page',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12ae',
                title: 'Search page',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12af',
            title: 'Add account management endpoints',
            description: '',
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12b0',
                title: 'Upgrade plan',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12b1',
                title: 'Cancel plan',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12b2',
                title: 'Update payment method',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12b3',
            title: 'Design onboarding flow',
            description: '',
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12b4',
                title: 'Sign up page',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12b5',
                title: 'Sign in page',
                isCompleted: false
              },
              {
                id: '64aefb2f4f4d88a29b7e12b6',
                title: 'Welcome page',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12b7',
            title: 'Add search endpoints',
            description: '',
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12b8',
                title: 'Add search endpoint',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12b9',
                title: 'Define search filters',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12ba',
            title: 'Add authentication endpoints',
            description: '',
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12bb',
                title: 'Define user model',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12bc',
                title: 'Add auth endpoints',
                isCompleted: false
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12bd',
            title: 'Research pricing points of various competitors and trial different business models',
            description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            status: 'Doing',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12be',
                title: 'Research competitor pricing and business models',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12bf',
                title: 'Outline a business model that works for our solution',
                isCompleted: false
              },
              {
                id: '64aefb2f4f4d88a29b7e12c0',
                title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: '64aefb2f4f4d88a29b7e12c1',
        name: 'Done',
        tasks: [
          {
            id: '64aefb2f4f4d88a29b7e12c2',
            title: 'Conduct 5 wireframe tests',
            description: 'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12c3',
                title: 'Complete 5 wireframe prototype tests',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12c4',
            title: 'Create wireframe prototype',
            description: 'Create a greyscale clickable wireframe prototype to test our assumptions so far.',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12c5',
                title: 'Create clickable wireframe prototype in Balsamiq',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12c6',
            title: 'Review results of usability tests and iterate',
            description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12c7',
                title: 'Meet to review notes from previous tests and plan changes',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12c8',
                title: 'Make changes to paper prototypes',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12c9',
                title: 'Conduct 5 usability tests',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12ca',
            title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
            description: '',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12cb',
                title: 'Create paper prototypes for version one',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12cc',
                title: 'Complete 10 usability tests',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12cd',
            title: 'Market discovery',
            description: 'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12ce',
                title: 'Interview 10 prospective customers',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12cf',
            title: 'Competitor analysis',
            description: '',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12d0',
                title: 'Find direct and indirect competitors',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12d1',
                title: 'SWOT analysis for each competitor',
                isCompleted: true
              }
            ]
          },
          {
            id: '64aefb2f4f4d88a29b7e12d2',
            title: 'Research the market',
            description: 'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
            status: 'Done',
            subtasks: [
              {
                id: '64aefb2f4f4d88a29b7e12d3',
                title: 'Write up research analysis',
                isCompleted: true
              },
              {
                id: '64aefb2f4f4d88a29b7e12d4',
                title: 'Calculate TAM',
                isCompleted: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '64af12e94f4d88a29b7e12d5',
    name: 'Marketing Plan',
    columns: [
      {
        id: '64af12e94f4d88a29b7e12d6',
        name: 'Todo',
        tasks: [
          {
            id: '64af12e94f4d88a29b7e12d7',
            title: 'Plan Product Hunt launch',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                id: '64af12e94f4d88a29b7e12d8',
                title: 'Find hunter',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12d9',
                title: 'Gather assets',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12da',
                title: 'Draft product page',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12db',
                title: 'Notify customers',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12dc',
                title: 'Notify network',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12dd',
                title: 'Launch!',
                isCompleted: false
              }
            ]
          },
          {
            id: '64af12e94f4d88a29b7e12de',
            title: 'Share on Show HN',
            description: '',
            status: '',
            subtasks: [
              {
                id: '64af12e94f4d88a29b7e12df',
                title: 'Draft out HN post',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12e0',
                title: 'Get feedback and refine',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12e1',
                title: 'Publish post',
                isCompleted: false
              }
            ]
          },
          {
            id: '64af12e94f4d88a29b7e12e2',
            title: 'Write launch article to publish on multiple channels',
            description: '',
            status: '',
            subtasks: [
              {
                id: '64af12e94f4d88a29b7e12e3',
                title: 'Write article',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12e4',
                title: 'Publish on LinkedIn',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12e5',
                title: 'Publish on Indie Hackers',
                isCompleted: false
              },
              {
                id: '64af12e94f4d88a29b7e12e6',
                title: 'Publish on Medium',
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: '64af12e94f4d88a29b7e12e7',
        name: 'Doing',
        tasks: []
      },
      {
        id: '64af12e94f4d88a29b7e12e8',
        name: 'Done',
        tasks: []
      }
    ]
  },
  {
    id: '64af1d834f4d88a29b7e12e9',
    name: 'Roadmap',
    columns: [
      {
        id: '64af1d834f4d88a29b7e12ea',
        name: 'Now',
        tasks: [
          {
            id: '64af1d834f4d88a29b7e12eb',
            title: 'Launch version one',
            description: '',
            status: '',
            subtasks: [
              {
                id: '64af1d834f4d88a29b7e12ec',
                title: 'Launch privately to our waitlist',
                isCompleted: false
              },
              {
                id: '64af1d834f4d88a29b7e12ed',
                title: 'Launch publicly on PH, HN, etc.',
                isCompleted: false
              }
            ]
          },
          {
            id: '64af1d834f4d88a29b7e12ee',
            title: 'Review early feedback and plan next steps for roadmap',
            description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            status: '',
            subtasks: [
              {
                id: '64af1d834f4d88a29b7e12ef',
                title: 'Interview 10 customers',
                isCompleted: false
              },
              {
                id: '64af1d834f4d88a29b7e12f0',
                title: 'Review common customer pain points and suggestions',
                isCompleted: false
              },
              {
                id: '64af1d834f4d88a29b7e12f1',
                title: 'Outline next steps for our roadmap',
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: '64af1d834f4d88a29b7e12f2',
        name: 'Next',
        tasks: []
      },
      {
        id: '64af1d834f4d88a29b7e12f3',
        name: 'Later',
        tasks: []
      }
    ]
  }
]
