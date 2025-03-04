USE [CrisisConnect]
GO
/****** Object:  Table [dbo].[Agents]    Script Date: 10/26/2024 2:23:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Agents](
	[AgentID] [int] NOT NULL,
	[DeviceName] [varchar](255) NOT NULL,
	[IPAddress] [varchar](50) NOT NULL,
	[LastHeartBeat] [datetime] NULL,
	[Uptime] [int] NULL,
	[ResourceUsage] [text] NULL,
	[Status] [varchar](50) NOT NULL,
	[Created_At] [datetime] NOT NULL,
 CONSTRAINT [PK_Agents] PRIMARY KEY CLUSTERED 
(
	[AgentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
