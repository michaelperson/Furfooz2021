using Playzone2020.API.Dto.Plants;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.services
{
    public class PlantService
    {

        private PlantRepository _repoPlant;
        private SeasonRepository _repoSeason;
        public PlantService(PlantRepository repoPlant, SeasonRepository repoSeason)
        {
            this._repoPlant = repoPlant;
            this._repoSeason = repoSeason;
        }

        public IEnumerable<PlantDto> Get()
        {
            IEnumerable<Plant> l = _repoPlant.Get().ToList();

            var groupBySeason = l.GroupBy(x => x.Seasons);
            /*
             * Items[0]
             * key:0
             * <list> : Plantes - Seasons =0   - Jonquille
             * ---
             * Items[1]
             * key:1
             * <list> : Plantes - Seasons =1  - Jonquille
             * */
             // ==> Jonquille : seasons = [0,1]

            List<PlantDto> retour = new List<PlantDto>();

            foreach (IGrouping<int, Plant> items in groupBySeason)
            {

                {
                    int CurrentSeason = items.Key;
                    foreach (var item in items)
                    {
                        if (retour.Count(p => p.Id == item.Id) > 0)
                        {
                            retour.First(p => p.Id == item.Id).Seasons.Add(CurrentSeason);
                        }
                        else
                        {
                            //Utilise le mapper
                            PlantDto pdto = item.ToDto();  
                            if(CurrentSeason == -1)
                            {
                                pdto.Seasons.Add(0);
                                pdto.Seasons.Add(1);
                                pdto.Seasons.Add(2);
                                pdto.Seasons.Add(3);
                            }
                            else
                            {
                                pdto.Seasons.Add(CurrentSeason);
                            }
                            retour.Add(pdto);
                        }
                    }

                }
            }

            return retour; 
        }
        //List<Plant> l = _repoPlant.Get().ToList();

            //return l.GroupBy(r => (
            //r.Id, r.Name_fr, r.Name_en, r.Name_nl, r.Name_la,
            //r.Description1_en, r.Description1_fr, r.Description1_nl,
            //r.Description2_en, r.Description2_fr, r.Description2_nl,
            //r.Description3_en, r.Description3_fr, r.Description3_nl,
            //r.Latitude, r.Longitude, r.Image, r.MimeTypeImage, r.CategoryPlant_id))
            //.Select(x => new PlantDto
            //    {
            //    Name_fr = x.Name_fr,
            //    Name_en = x.Name_en,
            //    Name_nl = x.Name_nl,
            //    Name_la = x.Name_la,
            //    Description1_en = x.Description1_en,
            //    Description1_fr = x.Description1_fr,
            //    Description1_nl = x.Description1_nl,
            //    Description2_fr = x.Description2_fr,
            //    Description2_nl = x.Description2_nl,
            //    Description2_en = x.Description2_en,
            //    Description3_en = x.Description3_en,
            //    Description3_fr = x.Description3_fr,
            //    Description3_nl = x.Description3_nl,
            //    Latitude = x.Latitude,
            //    Longitude = x.Longitude,
            //    Image = x.Image,
            //    MimeTypeImage = x.MimeTypeImage,
            //    CategoryPlant_id = x.CategoryPlant_id,
            //    Id = x.Id,
            //    Seasons = x.GroupBy(x => x.Seasons)
            //});
        //}

//public IEnumerable<PlantDto> Get()
//        {

//            IEnumerable<Plant> l = _repoPlant.Get();
//            return l.Select(d =>
//            {
//                PlantDto p = d.ToDto();
//                p.Seasons = _repoSeason.Get(p.Id).Select(x => x.Seasons).ToList();
//                if (p.Seasons.Count == 0)
//                {
//                    p.Seasons.Add(0);
//                    p.Seasons.Add(1);
//                    p.Seasons.Add(2);
//                    p.Seasons.Add(3);
//                }
//                return p;
//            });
//        }

public PlantDto Get(int id)
        {
            //PlantDto p = _repoPlant.Get(id).ToDto();
            //p.Seasons = _repoSeason.Get(p.Id).Select(x => x.Seasons).ToList();
            //if (p.Seasons.Count == 0)
            //{
            //    p.Seasons.Add(0);
            //    p.Seasons.Add(1);
            //    p.Seasons.Add(2);
            //    p.Seasons.Add(3);
            //}
            //return p;

            IEnumerable<Plant> l = _repoPlant.Get(id).ToList();

            var groupBySeason = l.GroupBy(x => x.Seasons);
            /*
             * Items[0]
             * key:0
             * <list> : Plantes - Seasons =0   - Jonquille
             * ---
             * Items[1]
             * key:1
             * <list> : Plantes - Seasons =1  - Jonquille
             * */
            // ==> Jonquille : seasons = [0,1]

            List<PlantDto> retour = new List<PlantDto>();

            foreach (IGrouping<int, Plant> items in groupBySeason)
            {

                {
                    int CurrentSeason = items.Key;
                    foreach (var item in items)
                    {
                        if (retour.Count(p => p.Id == item.Id) > 0)
                        {
                            retour.First(p => p.Id == item.Id).Seasons.Add(CurrentSeason);
                        }
                        else
                        {
                            //Utilise le mapper
                            PlantDto pdto = item.ToDto();
                            if (CurrentSeason == -1)
                            {
                                pdto.Seasons.Add(0);
                                pdto.Seasons.Add(1);
                                pdto.Seasons.Add(2);
                                pdto.Seasons.Add(3);
                            }
                            else
                            {
                                pdto.Seasons.Add(CurrentSeason);
                            }
                            retour.Add(pdto);
                        }
                    }

                }
            }

            return retour.FirstOrDefault();
        }


        public int Add(PlantDto model)
        {
            if(_repoPlant.Get().FirstOrDefault(x => x.Name_fr == model.Name_fr) != null)
            {
                return -1;
            }
            else
            {
                int id = _repoPlant.Insert(model.ToEntity());
                foreach (var item in model.Seasons)
                {
                    _repoSeason.Add(item, id);
                }     
                return model.Id = id; 
            }
        }

        public void Update(PlantDto model)
        {
            _repoPlant.Update(model.ToEntity());
            _repoSeason.Remove(model.Id);
            foreach (var item in model.Seasons)
            {
                _repoSeason.Add(item, model.Id);
            }
            
        }
    }
}
