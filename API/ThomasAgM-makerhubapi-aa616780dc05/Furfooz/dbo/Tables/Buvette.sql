CREATE TABLE [dbo].[Buvette] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Name_fr]     VARCHAR (255) NOT NULL,
    [Name_nl]     VARCHAR (255) NULL,
    [Name_en]     VARCHAR (255) NULL,
    [Price]       FLOAT (53)    NULL,
    [IsDeleted]   BIT           NULL,
    [Category_Id] INT           NULL,
    CONSTRAINT [PK__Buvette__3214EC0779EE0AB3] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK__Buvette__Categor__2D27B809] FOREIGN KEY ([Category_Id]) REFERENCES [dbo].[CategoryProduct] ([Id])
);

