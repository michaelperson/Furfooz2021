CREATE TABLE [dbo].[PointInteret] (
    [Id]             INT             IDENTITY (1, 1) NOT NULL,
    [Name_fr]        VARCHAR (56)    NOT NULL,
    [Name_nl]        VARCHAR (56)    NULL,
    [Name_en]        VARCHAR (56)    NULL,
    [Image]          VARBINARY (MAX) NULL,
    [Description_fr] VARCHAR (MAX)   NULL,
    [Description_nl] VARCHAR (MAX)   NULL,
    [Description_en] VARCHAR (MAX)   NULL,
    [Latitude]       FLOAT (53)      NULL,
    [Longitude]      FLOAT (53)      NULL,
    [StartDate]      DATETIME2 (7)   NULL,
    [EndDate]        DATETIME2 (7)   NULL,
    [Interval]       FLOAT (53)      NULL,
    [IsDeleted]      BIT             NULL,
    [Category_id]    INT             NULL,
    [mimeType]       NVARCHAR (50)   NULL,
    CONSTRAINT [PK__PointInt__3214EC0764BC2897] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK__PointInte__Categ__267ABA7A] FOREIGN KEY ([Category_id]) REFERENCES [dbo].[Category] ([Id])
);

